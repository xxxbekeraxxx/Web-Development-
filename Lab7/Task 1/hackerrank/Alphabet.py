import string

def print_rangoli(size):
    alphabet = string.ascii_lowercase[:size]
    
    lines = []
    for i in range(size):
        s = "-".join(alphabet[size-1:i:-1] + alphabet[i:size])
        
        lines.append(s.center(4 * size - 3, "-"))
    
    print('\n'.join(lines[::-1] + lines[1:]))

if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)