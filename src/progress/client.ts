import type { Dashboard, MasteryReport } from './dashboard.ts';
import type {
  Attempt,
  AttemptInput,
  PaperResult,
  PaperResultInput,
  Progress,
  ReviewItem,
  SheetDraft,
} from './progress.ts';

export type Result<T> = { ok: true; value: T } | { ok: false; error: string };

async function request<T>(url: string, init?: RequestInit): Promise<Result<T>> {
  try {
    const response = await fetch(url, { cache: 'no-store', ...init });
    const payload: unknown = await response.json().catch(() => null);
    if (!response.ok) {
      const error =
        payload && typeof payload === 'object' && 'error' in payload && typeof payload.error === 'string'
          ? payload.error
          : 'The server refused the request.';
      return { ok: false, error };
    }
    return { ok: true, value: payload as T };
  } catch {
    return { ok: false, error: 'The server did not respond.' };
  }
}

function postJson<T>(url: string, body?: unknown): Promise<Result<T>> {
  return request<T>(url, {
    method: 'POST',
    headers: body === undefined ? undefined : { 'content-type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
}

export function fetchProgress(): Promise<Result<Progress>> {
  return request('/api/progress');
}

export function importProgress(progress: unknown): Promise<Result<Progress>> {
  return postJson('/api/progress', progress);
}

export function fetchAttempts(exerciseId: string): Promise<Result<{ attempts: Attempt[] }>> {
  return request(`/api/attempts?exerciseId=${encodeURIComponent(exerciseId)}`);
}

export function saveAttempt(input: AttemptInput): Promise<Result<{ attempt: Attempt; review: ReviewItem | null }>> {
  return postJson('/api/attempts', input);
}

export function fetchDue(): Promise<Result<{ due: ReviewItem[] }>> {
  return request('/api/review');
}

export function postponeItem(id: string): Promise<Result<{ review: ReviewItem }>> {
  return postJson(`/api/reviews/${encodeURIComponent(id)}/postpone`);
}

export function saveConceptPick(questionId: string, right: boolean): Promise<Result<{ review: ReviewItem | null }>> {
  return postJson(`/api/questions/${encodeURIComponent(questionId)}/pick`, { right });
}

export function fetchDashboard(): Promise<Result<Dashboard>> {
  return request('/api/dashboard');
}

export function fetchMastery(): Promise<Result<MasteryReport>> {
  return request('/api/mastery');
}

export function fetchSheet(): Promise<Result<SheetDraft>> {
  return request('/api/sheet');
}

export function saveSheet(draft: SheetDraft): Promise<Result<SheetDraft>> {
  return postJson('/api/sheet', draft);
}

export function savePaperResult(
  paperId: string,
  body: PaperResultInput,
): Promise<Result<{ paperResult: PaperResult; attempts: Attempt[]; reviews: (ReviewItem | null)[] }>> {
  return postJson(`/api/papers/${encodeURIComponent(paperId)}/result`, body);
}

export function saveSectionsDone(nodeId: string, sectionIds: string[]): Promise<Result<{ nodeId: string; sectionsDone: string[] }>> {
  return postJson('/api/sections', { nodeId, sectionIds });
}
