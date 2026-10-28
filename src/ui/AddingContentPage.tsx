import bundle from 'virtual:content-bundle';
import { Prose } from './prose.tsx';

export function AddingContentPage() {
  return (
    <div className="adding-content-page">
      <Prose text={bundle.addingContent} document />
    </div>
  );
}
