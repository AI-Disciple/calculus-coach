"""SymPy verifier for exercise verification records.

Reads a JSON list from stdin: [{"id": str, "checks": [{"expr": str, "expected": str}]}].
Writes a JSON list to stdout: [{"id": str, "check": int, "ok": bool, "message": str}].
Expressions use SymPy syntax. Free names become symbols, so avoid E, I, N, S, Q and O as variable names.
"""

import json
import sys

from sympy import Set, Tuple, simplify, sympify


def equivalent(actual, expected):
    if isinstance(actual, (tuple, list, Tuple)) or isinstance(expected, (tuple, list, Tuple)):
        return (
            isinstance(actual, (tuple, list, Tuple))
            and isinstance(expected, (tuple, list, Tuple))
            and len(actual) == len(expected)
            and all(equivalent(a, e) for a, e in zip(actual, expected))
        )
    if isinstance(actual, Set) or isinstance(expected, Set):
        return simplify(actual) == simplify(expected)
    # Only an exact symbolic proof counts. Numeric sampling could accept a difference that is not zero.
    return simplify(actual - expected) == 0


def run_check(check):
    try:
        actual = sympify(check["expr"])
        expected = sympify(check["expected"])
    except Exception as error:  # noqa: BLE001 - any parse failure is a content error
        return False, f"could not parse: {error}"
    try:
        if equivalent(actual, expected):
            return True, ""
    except Exception as error:  # noqa: BLE001
        return False, f"could not compare: {error}"
    return False, f"{check['expr']} gives {actual}, expected {check['expected']}"


def main():
    records = json.load(sys.stdin)
    results = []
    for record in records:
        for index, check in enumerate(record["checks"]):
            ok, message = run_check(check)
            results.append({"id": record["id"], "check": index, "ok": ok, "message": message})
    json.dump(results, sys.stdout)


if __name__ == "__main__":
    main()
