def add_entry(date, topic, problem, link, notes):
    row = f"| {date} | {topic} | {problem} | {link} | {notes} |\n"
    with open("rigved/progress.md", "a") as f:
        f.write(row)

# Example usage
# add_entry("2025-11-29", "Hash Table", "Two Sum", "https://leetcode.com/problems/two-sum/", "Remembered it this time")
add_entry("2025-12-28", "Sliding Window", "Longest Substring Without Repeating Characters", "https://leetcode.com/problems/longest-substring-without-repeating-characters/", "Kinda difficult but managed it.")
