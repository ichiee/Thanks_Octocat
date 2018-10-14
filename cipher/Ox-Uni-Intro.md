## Oxford University Cryptography Very short In troduction

The information to be concealed is often called the and the operation of disguising it is known as encryption.

ciphertext or cryptogram  - The encrypted plaintext
encryption algorithm - the set of rules used to encrypt information plaintext 

operation of this algorithm depends on an encryption key
decryption algorithm to decrypt with a specific key
 
interceptor, 'eavesdropper', 'enemy', 'adversary', 'bad guy' - try to intercepts during transmission of cryptgramme
 
Cryptography is the science of designing of cipher systems
cryptanalysis is the name given to the process of deducing information about plaintext from the ciphertext without being given the appropriate key. 
Cryptology is the collective term for both cryptography and cryptanalysis.

 two types of cipher systems: symmetric and asymmetric.
if it is practically impossible to deduce the decryption key from the encryption key, then the system is called asymmetric or public key.

### the worst-case conditions.

(WCl)
The cryptanalyst has a complete knowledge of the cipher system.
:keeping a system secret.
(WC2)
The cryptanalyst has obtained a considerable amount of ciphertext.
:all transmissions can be intercepted.
(WC3)
The cryptanalyst knows the plaintext equivalent of a certain amount of the ciphertext.
: ciphertext-only attack & plaintext attack

### 'Is this system secure enough for this particular application?

If we assume that our decryption algorithm is known then there is one obvious method of attack available to any adversary
Such an attack is called an exhaustive key search or, alternatively, a brute force attack. 

 In a known plaintext attack, for instance, it is clear that any choice of the decryption key which does not give the correct plaintext for all the corresponding ciphertext cannot possibly be the correct one

If the designers now make assumptions about the speed with which an attacker could try each key, then they can estimate the expected time for an exhaustive key search to reveal the key. If this latter time is shorter than the cover time, then the system is clearly too weak. 

#### Thus our first crude requirement is: the estimated time required for an exhaustive key search should be significantly longer than the cover time.

### OMG this is so cute

Step 1:
The sender places the present in the briefcase, which they lock with their padlock and remove their key. They then send the locked briefcase to the receiver.
Note:
While the briefcase is en route from sender to receiver, it is safe from all adversaries, because they cannot remove the padlock from the briefcase. However, the receiver is also unable to obtain the present.
Step 2:
The receiver locks the briefcase with their own padlock and removes the key. They then return it to the sender.
Note:
The briefcase is now locked with two padlocks so no one can get the present.
Step 3:
The sender uses their own key to remove their padlock from the briefcase and returns the briefcase to the receiver.
Note:
The only lock on the briefcase belongs to the receiver.
Step 4:

*****

## Simple Substitution Cipher (or Monoalphabetic Cipher)
26 factorial
403,291,461,126,605,635,584,000,000.

Make key short - get rid of repeated alphabet

••• The statistics of the English language
https://en.wikipedia.org/wiki/Letter_frequency

### The Playfair Cipher

The key is a 5 by 5 square (with entries comprised of the 25 letters obtained by deleting J from the alphabet) and thus there are 25! or
15,511,210,043,330,985,984,000,000
keys. Before encrypting using a Playfair Cipher the message has to be rearranged slightly. To do this you:
replace Js with Is;
write message in pairs of letters;
do not allow identical pairs - if they occur insert Z between them;
if the number of letters is odd, add Z to the end.

Once the message has been suitably rearranged we give the rule for encryption. 
In order to clarify our description we extend the key by adding a sixth column and a sixth row to the original key. 
The sixth row is identical to the first row, while the sixth column is identical to the first column. 
Thus, for our example, the extended key can be set out as in the diagram.

The rule for encryption is as follows.
- If the two letters lie in the same row of the key then each letter is replaced by the one on its right in the extended key.
- If two letters lie in the same column of the key then each letter is replaced by the one below it in the extended key.
- If the two letters are not in the same row or column then the first letter is replaced by the letter that is in the row of the first letter 
and the column of the second letter. The second letter is replaced by the fourth corner of the rectangle formed 
by the three letters used so far.


Note: Just remembered this
In C Whenever the Character is variable is used in the expression then it is automatically Converted into  Integer Value called ASCII value


#### Transposition Ciphers  
based on the idea of transposing the order in which the letters are written. 

#### Super-encryption
We now introduce a concept that can be used to combine two or more weak ciphers to obtain one that is considerably stronger than either.

### one time pad 

D (K, E(K, M)) = D(K, E(k, k xor m) =(k xor (k xor m) = (k xor k) +o m = 0 xor m

#### Stream Cipher

D (K, E(K, M))= m
A stream cipher takes a short key to generate a long keystream. This is achieved by using a binary sequence generator.
One generation process is then that each bit of the sequence is obtained by XORing the first and last bits of the previous four. 
If we start with 1111 the sequence continues 111101011001000 and then repeats forever.


















