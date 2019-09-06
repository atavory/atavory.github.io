:title: Principal Component Cardinality via Normalized Maximum Likelihood
:css: preso.css
:data-transition-duration: 800


.. |br| raw:: html

  <br/>

.. |rarr| raw:: html

  &rarr;

.. role:: underline
    :class: underline


----

Minimum Description Length |br| |rarr| |br| Principal Components' Cardinality
=============================================================================

.. image:: logo.png
    :class: center
    :height: 200px

Ami Tavory |br| Facebook Research, Core Data Science
----------------------------------------------------------------------

.. note::

    Presenter console active


----

:data-x: r-20
:data-y: r-50
:data-scale: 0.01

Outline
========================

* :underline:`Introduction`

* MDL

* MDL Reduction for PCA

* Results

* Conclusions


----

:data-x: r0
:data-y: r0
:data-scale: 0.0001

SVD |br| (Singular Value Decomposition)
==========================================

.. image:: svd.png
  :scale: 1

* :math:`X = X_{n \times m}`
* :math:`U`, `V` unitary
* :math:`\Sigma = \mathrm{diag}\left(\sigma_1, ..., \sigma_n\right)` eigenvalue matrix


----

:data-x: r0
:data-y: r0.15

PCA |br| (Principal Components Analysis) Approximation
=======================================================

.. image:: pca_orig_1.png
  :scale: 1


----

:data-x: r0
:data-y: r0
:data-rotate-y: r90

.. image:: pca_orig_2.png
  :scale: 1


----

:data-y: r0.1
:data-rotate-y: -90

Focus Only on Dimensions
========================

.. image:: pca_reduced_1.png
  :scale: 1


----

:data-x: r0.0
:data-y: r0.0
:data-rotate-y: r90

.. image:: pca_reduced_2.png
  :scale: 1


----

:data-x: r0.0
:data-y: r0.1
:data-rotate-y: r-90

Which :math:`k` Should We Choose?
=================================

.. image:: pca_reduced_how_much.png
  :scale: 1


----

:data-x: r0.0
:data-y: r0.1
:data-rotate-y: r0

Minimize Reconstruction Error?
=================================

----

:data-x: r-0.1
:data-y: r0.05
:data-rotate-y: r0

.. class:: substep

  (Eckart-Young-Mirsky) For any :math:`k`

  .. math::

      \min_{W, V} \left| X - W_k V_k^T \right|_2^2  = \sum_{i = k + 1}^m\left[ \sigma_i^2\right].


----

:data-x: r-0.1
:data-y: r0.05
:data-rotate-y: r0

.. image:: explained_var_ratio.png
  :scale: 1

----

:data-x: r-0.1
:data-y: r0.05
:data-rotate-y: r0

.. image:: over_the_top.png
  :scale: 1


----

:data-x: r0.0
:data-y: r0.1
:data-rotate-y: r0

Find Knee/Elbow?
=================================

.. image:: explained_var_ratio_kneed.png
  :scale: 2


----

:data-x: r0.0
:data-y: r0.1
:data-rotate-y: r0

Utilize Eigenvalue Properties?
=================================

.. image:: explained_var_ratio_kaiser.png
  :scale: 2


----

:data-x: r-0.07
:data-y: r-0.07
:data-z: r-0.07
:data-rotate-y: r0

Drawbacks
=================================

* Not very well established theoretically
* Known to be problematic in some cases


----

:data-x: r0
:data-y: r0
:data-rotate-y: 0
:data-scale: r100

Outline
========================

* Introduction

* :underline:`MDL`

* MDL Reduction for PCA

* Results

* Conclusions


----

:data-x: r-0.3
:data-y: r0.3
:data-scale: 0.0001

Minimum Description Length Principle
==========================================

.. image:: Occam.png
    :class: center
    :height: 200px

The best hypothesis for a given set of data, is the one that leads to the best compression of the data (Rissanen).


----

:data-x: r0
:data-y: r0.15

Application to PCA Cardinality
==============================

.. image:: sender_receiver.png
  :scale: 1


----

:data-x: r0.03
:data-y: r0.05
:data-z: r0.05
:data-rotate-y: r0

.. image:: pca_delta.png
  :scale: 1
  :align: center


----

:data-x: r0.0
:data-y: r0.03
:data-z: r0.05
:data-rotate-y: r0

.. image:: sender_receiver_improved.png
  :scale: 1


----

:data-x: r0.0
:data-y: r0.3
:data-z: r0.0
:data-rotate-y: r0

Inherent Tradeoff
========================

.. image:: pca_reduced_1_comm.png
  :scale: 1


----

:data-x: r0.0
:data-y: r0.0
:data-z: r0.0
:data-rotate-y: r90

.. image:: pca_reduced_2_comm.png
  :scale: 1


----

:data-x: r0.0
:data-y: r1.0
:data-z: r0.0
:data-rotate-y: r-90

How to Find the Description Length?
=====================================

.. class:: substep

  * Use Information Theory (Shannon) and Complexity Theory (Kolmogorov).

  * If we can impose a density :math:`f(X)` on an R.V. :math:`X`, then :math:`-\log\left(f(X)\right)` is (effectively) the answer.

  * Transformed escription length problem |rarr| distribution problem.

----

:data-x: r0.0
:data-y: r0.03
:data-z: r0.05
:data-rotate-y: r0

* But how should we choose a distribution for a model?


----

:data-x: r0
:data-y: r0.15
:data-z: r0.00
:data-rotate-y: r0

Normalized Maximum Likelihood
==============================

* Let :math:`X` be distributed according to a model parameterized by :math:`\Phi`.

* Let :math:`\hat{\Phi}\left(X\right)` be the ML (maximum likelihood) estimate of :math:`\Phi` for :math:`X`.


----

:data-x: r0.0
:data-y: r0.05
:data-z: r0.05
:data-rotate-y: r0

* The NML (normalized maximum likelihood) distribution is

  .. math::

    {f\left( X \;;\; \hat{\Phi}\left(X\right)\right) \over \int f\left( Y \;;\; \hat{\Phi}\left(Y\right)\right) dY }


* This is the "modern form" of MDL (Shtarkov, Rissanen)

  * Prequential (Dawid) optimality properties


----

:data-x: r0.0
:data-y: r0.052
:data-z: r0.05
:data-rotate-y: r0

Inutitively, :math:`f\left( X \;;\; \hat{\Phi}\left(X\right)\right)` an immediate choice,
but self-referential, cannot be used for transmission

  .. image:: self_referential.png
      :scale: 1

----

:data-x: r0.0
:data-y: r0.052
:data-z: r0.05
:data-rotate-y: r0

.. math::

  {f\left( X \;;\; \hat{\Phi}\left(X\right)\right) \over \int f\left( Y \;;\; \hat{\Phi}\left(Y\right)\right) dY }

also has a pleasing bias-variance tradeoff.



----

:data-x: r0
:data-y: r0.15
:data-z: r0.00
:data-rotate-y: r0

PCA as a Generative Model
=======================================================

  .. image:: plate1.png
    :class: center
    :height: 400px

:math:`\Phi \equiv k, \Gamma`


----

:data-x: r-20
:data-y: r-50
:data-scale: 0.01

Outline
========================

* Introduction

* MDL

* :underline:`MDL Reduction for PCA`

* Results

* Conclusions
