# The Really Simple Explanation of G&#xf6;del's Incompleteness Theorem

## Introduction

G&#xf6;del's Incompleteness Theorem is one of the most important results in all of math and science. Here, I will demystify it by proving it. The proof is a summarized version of G&#xf6;del's own proof sketch. If you know predicate logic, then the proof should be easy to understand. Otherwise, just trust me that self-referential statements exist and skip to Step 3.

## Proof

Theorem: Let a sound mathematical system be one that doesn't prove false statements. In any complex enough sound mathematical system, there's at least one statement that can neither be proved nor disproved.  

Proof:  
1. Let K(n) be defined as "The statement resulting from substituting n into itself does not have a proof."
2. Let G be defined as K(K), aka the statement resulting from substituting K into itself.
3. By the definition of K, G is equivalent to the statement "G does not have a proof."
4. Assume for the sake of contradiction that G is provable.
5. Since G is provable, then it must be false by definition and true by the system's soundness.
6. Contradiction!
7. Since the assumption from Step 4 is false, G is unprovable. By definition, G is also true; &there4; there's at least one true and unprovable statement G. (This is often just given as the result)
8. Since G is true and the system cannot prove a false result (e.g. "G is false"), G cannot be disproved.
9. In other words, G cannot be proved or disproved.  
QED.

## Context

By establishing basic limits on knowledge, G&#xf6;del's Incompleteness Theorem has enormous consequence for math and science. Unfortunately, it is often assumed to be very complicated; one source even recommended taking an entire class on it. This is despite the fact that G&#xf6;del himself put a 2-page proof sketch in his original paper. The only assumptions made are that statements can be represented by numbers (that way they can be substituted into themselves) and that "proof" can be defined mathematically.

For those who want more details about the proof, I recommend reading the original 22-page paper by G&#xf6;del; it's not as intimidating as one might think. Another option is Imaad Nisar for G&#xf6;del numbering and Ryan O'Donnell for defining "proof" mathematically for those with sufficient background. For those interested in the fascinating historical context, I recommend reading about Hilbert's Program. I haven't placed a source on the Incompleteness Theorem's consequences because I've personally found that it's best to just think about it on one's own and to see how it relates to one's own field of study. This thinking should help you understand why the Incompleteness Theorem is one of the most important results ever published.

## Sources

Kurt G&#xf6;del, *On formally undecidable propositions of Principia
Mathematica and related systems I*, 1931, <http://www.hirzels.com/martin/papers/canon00-goedel.pdf>

Imaad Nisar, "Meta-mathematics and G&#xf6;del Numbering", <https://www.lucy.cam.ac.uk/sites/default/files/inline-files/Meta-mathematics%20and%20Godel%20Numbering.pdf>, 30 May 2022, *Lucy Cavendish*

Raymond Smullyan, "World's shortest explanation of G&#xf6;del's Theorem", <https://blog.plover.com/math/Gdl-Smullyan.html>, 13 December 2009, *The Universe of Discourse*

Ryan O'Donnell et al., "Lecture 16", <https://www.anilada.com/courses/15251s16/www/slides/15251-s16-lecture16.pdf>, 3 March 2016, *15-251*

Zach, Richard, "Hilbert's Program", <https://plato.stanford.edu/archives/spr2023/entries/hilbert-program/>, Spring 2023, *Stanford Encyclopedia of Philosophy (Spring 2023 Edition)*
