def add_entry(date, topic, problem, link, notes):
    row = f"| {date} | {topic} | {problem} | {link} | {notes} |\n"
    with open("rigved/progress.md", "a") as f:
        f.write(row)

# Example usage
# add_entry("2025-11-29", "Hash Table", "Two Sum", "https://leetcode.com/problems/two-sum/", "Remembered it this time")
add_entry("2025-12-30", "Two Pointer","Two Integer Sum II", "https://neetcode.io/problems/two-integer-sum-ii/question", "Took 10mins. Easy.")
