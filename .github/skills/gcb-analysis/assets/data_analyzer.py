import re
import sys

def analyze_text(text):
    # Simple analysis: find lines with numbers (potential data points)
    lines = text.split('\n')
    data_lines = [line for line in lines if re.search(r'\d', line)]
    
    # Find keywords related to carbon budget
    keywords = ['emissions', 'budget', 'CO2', 'carbon', 'atmospheric', 'projection', 'trend']
    relevant_lines = [line for line in lines if any(kw in line.lower() for kw in keywords)]
    
    summary = {
        'total_lines': len(lines),
        'data_lines_count': len(data_lines),
        'relevant_lines_count': len(relevant_lines),
        'sample_data_lines': data_lines[:10],  # First 10
        'sample_relevant_lines': relevant_lines[:10]
    }
    return summary

if __name__ == "__main__":
    text = sys.stdin.read()
    summary = analyze_text(text)
    print("Summary:")
    for key, value in summary.items():
        print(f"{key}: {value}")