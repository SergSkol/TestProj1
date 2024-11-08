import random
from collections import defaultdict

def generate_random_series(length):
    # Generate a random series of 0s and 1s
    return [random.choice([0, 1]) for _ in range(length)]

def find_run_probabilities(series, max_run_length):
    run_counts = defaultdict(int)
    total_runs = 0
    i = 0

    # Count runs of 1s in the series
    while i < len(series):
        if series[i] == 1:
            run_length = 1
            while i + run_length < len(series) and series[i + run_length] == 1:
                run_length += 1
            if run_length >= 2:  # Start counting runs from length 2
                run_counts[run_length] += 1
                total_runs += 1
            i += run_length
        else:
            i += 1

    # Calculate probabilities
    run_probabilities = {length: run_counts[length] / total_runs for length in range(2, max_run_length + 1)}
    return run_probabilities

# Parameters
series_length = 10000  # Length of the random series
max_run_length = 9    # Maximum run length to calculate probability for

# Generate the series and calculate probabilities
series = generate_random_series(series_length)
probabilities = find_run_probabilities(series, max_run_length)

# Output the probabilities
print("Probability of runs of specific lengths (2-10):")
for length, probability in probabilities.items():
    print(f"Length {length}: {probability:.4f}")
