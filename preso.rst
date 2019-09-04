:title: Principal Component Cardinality via Normalized Maximum Likelihood
:data-transition-duration: 800
:css: preso.css


.. |br| raw:: html

  <br/>

.. |rarr| raw:: html

  &rarr;

.. |space| raw:: html

  &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205; &#8205;

.. role:: underline
    :class: underline

----

Minimum Description Length |br| |rarr| |br| Principal Components Cardinality
=============================================================================

|

Ami Tavory, |br| |space| Facebook Research, Core Data Science
--------------------------------------------------------------------------------------------------------------------------------

:id: title

.. note::

    Presenter console active

----

:data-x: r-20
:data-y: r-50
:data-scale: 0.01

Outline
========================

* :underline:`Introduction`

* MDL Reduction

* MDL Reduction for PCA

* Results

* Conclusions

----

:data-x: r0
:data-y: r0
:data-scale: 0.0001

PCA |br| (Principal Components Analysis )
==========================================

.. image:: pca_orig_1.png
    :height: 600px
    :width: 600px

----

:data-rotate-y: 90

.. image:: pca_orig_2.png
    :height: 600px
    :width: 600px

----

:data-y: r0.1
:data-rotate-y: -90

Focus Only on Dimensions
==========================================

.. image:: pca_reduced_1.png
    :height: 600px
    :width: 600px

----

:data-x: r0.0
:data-y: r0.0
:data-rotate-y: r90

.. image:: pca_reduced_2.png
    :height: 600px
    :width: 600px

----

:data-x: r0.0
:data-y: r0.1
:data-rotate-y: r-90

Which :math:`k` Should We Choose?
=================================

.. image:: pca_reduced_1.png
    :height: 600px
    :width: 600px

----

:data-x: r0.0
:data-y: r0.1
:data-rotate-y: r0

Eckart-Young-Mirsky
=================================

For any :math:`k`

.. math::

    \min_{W, V} \left| X - W_k V_k \right|_2^2  = \sum_{i = k + 1}^m\left[ \sigma_i^2\right]
