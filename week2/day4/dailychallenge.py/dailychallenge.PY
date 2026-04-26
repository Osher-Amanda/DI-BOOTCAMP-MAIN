# Exercise: Text Analysis and Modification


# We will need the string and re modules
import string   # gives us access to string constants like punctuation
import re       # gives us access to regular expressions for advanced text cleaning



# Part 1: Text Class

class Text:
    def __init__(self, text):
        # The constructor (__init__) stores the text that we want to analyze
        self.text = text

    def word_frequency(self, word):
        """
        Count how many times a specific word appears in the text.
        """
        words = self.text.split()        # split the text into a list of words
        count = words.count(word)        # count how many times the word appears
        if count == 0:                   # if the word doesn't exist
            return None                  # return None
        return count                     # otherwise return the count

    def most_common_word(self):
        """
        Find the most common (most frequent) word in the text.
        """
        words = self.text.split()        # split into words
        freq_dict = {}                   # empty dictionary to store word counts

        # count how many times each word appears
        for w in words:
            freq_dict[w] = freq_dict.get(w, 0) + 1  

        # max(..., key=freq_dict.get) finds the word with the highest count
        most_common = max(freq_dict, key=freq_dict.get)
        return most_common

    def unique_words(self):
        """
        Return a list of unique words (no duplicates).
        """
        words = self.text.split()
        unique = set(words)              # set removes duplicates automatically
        return list(unique)              # convert back to a list

    @classmethod
    def from_file(cls, file_path):
        """
        Create a Text object from the content of a file.
        """
        with open(file_path, "r", encoding="utf-8") as f:  # open the file
            content = f.read()                             # read the text
        return cls(content)                                # create a Text object with it



# Part 2: TextModification Class

class TextModification(Text):  # inherits from Text
    def remove_punctuation(self):
        """
        Remove punctuation from the text (.,!? etc.).
        """
        # str.maketrans("", "", string.punctuation) creates a translation table
        translator = str.maketrans("", "", string.punctuation)
        cleaned = self.text.translate(translator)  # remove punctuation
        return cleaned

    def remove_stop_words(self):
        """
        Remove common stop words like 'a', 'the', 'is'.
        """
        # this is a small set of stop words (can be expanded)
        stop_words = {"a", "the", "is", "in", "at", "to", "of", "and", "on", "for", "with"}
        words = self.text.split()                   # split text into words
        filtered = [w for w in words if w.lower() not in stop_words]  # remove stop words
        return " ".join(filtered)                   # join the remaining words back into a string

    def remove_special_characters(self):
        """
        Remove special characters (keep only letters, numbers, and spaces).
        """
        cleaned = re.sub(r"[^A-Za-z0-9\s]", "", self.text)  # regex replaces unwanted chars with ""
        return cleaned



# Testing Part 1 (Text)

sample_text = "the cat and the dog played in the garden with the cat"

t = Text(sample_text)

print("Word frequency 'cat':", t.word_frequency("cat"))  
# should print: 2

print("Most common word:", t.most_common_word())  
# should print: 'the'

print("Unique words:", t.unique_words())  
# should print: ['the', 'cat', 'and', 'dog', 'played', 'in', 'garden', 'with']

# Example of from_file usage:
# t_from_file = Text.from_file("sample.txt")
# print(t_from_file.most_common_word())



# Testing Part 2 (TextModification)

tm = TextModification("Hello!!! This is a test, with punctuation & special #characters.")

print("Removed punctuation:", tm.remove_punctuation())
# Hello This is a test with punctuation  special characters

print("Removed stop words:", tm.remove_stop_words())
# Hello!!! This test, punctuation & special #characters.

print("Removed special characters:", tm.remove_special_characters())
# Hello This is a test with punctuation  special characters