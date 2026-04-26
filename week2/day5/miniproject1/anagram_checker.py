# anagram_checker.py

class AnagramChecker:
    def __init__(self, word_file):
        # # Loaded all words from the file into a list
        with open(word_file, "r") as file:
            # Stripped newline characters and convert all words to lowercase
            self.words = [line.strip().lower() for line in file]

    def is_valid_word(self, word):
        # # Checked if the word exists in the word list
        return word.lower() in self.words

    def is_anagram(self, word1, word2):
        # # Compared two words and returned True if they are anagrams
        return sorted(word1.lower()) == sorted(word2.lower()) and word1.lower() != word2.lower()

    def get_anagrams(self, word):
        # # Return a list of all anagrams from the word list
        word = word.lower()
        return [w for w in self.words if self.is_anagram(word, w)]
    
    # __init__ → Loads the words file and stores them in a list.
# is_valid_word → Checks if the user’s word exists in the dictionary.
# is_anagram → Returns True if two words contain the same letters but aren’t identical.
# get_anagrams → Finds all words in the list that are anagrams of the given word.



