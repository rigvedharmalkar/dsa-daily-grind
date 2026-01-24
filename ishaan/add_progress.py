def add_entry(date, topic, problem, link, notes):
    row = f"| {date} | {topic} | {problem} | {link} | {notes} |\n"
    with open("ishaan/progress.md", "a") as f:
        f.write(row)

# Example usage
add_entry("2025-11-29", "Hash Table", "Two Sum", "https://leetcode.com/problems/two-sum/", "Remembered it this time")
add_entry("2026-01-24", "Strings", "Comman Longest Prefix", "https://leetcode.com/problems/longest-common-prefix/", "Got to know what lexiological is lol")
