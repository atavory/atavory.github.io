:title: Control Groups for Expensive and Adversarial Settings
:data-transition-duration: 500
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

Control Groups for |br| Expensive and Adversarial Settings
===========================================================

.. image:: img/tlv.png
    :class: center
    :height: 200px

Ami Tavory, |br| |space| Facebook Research, Core Data Science
----------------------------------------------------------------

:id: title

.. note::

    Presenter console active


----

:data-x: r-20
:data-y: r-100
:data-scale: 0.01

Online Fraud Detection |br| and Its Assessment
===============================================

.. image:: img/system_init.png
    :class: center
    :height: 500px


----

:data-x: r0
:data-y: r10
:data-rotate-x: 45
:data-scale: 0.02

.. image:: img/system_init_dumb.png
    :class: center
    :height: 500px


----

:data-x: r30
:data-y: r-10
:data-rotate-x: 0
:data-scale: 0.01

Classic Control-Group Solution
=================================

.. image:: img/system_classic.png
    :class: center
    :width: 500px


----

:data-x: r0
:data-y: r10
:data-rotate-x: 45
:data-scale: 0.02

.. image:: img/assess_objective.png
    :class: center
    :width: 500px


----

:data-x: r30
:data-y: r-14
:data-rotate-x: 0
:data-scale: 0.01

Standard Problems
=================================


----

:data-x: r-4
:data-y: r3
:data-scale: 0.01

.. image:: img/assess_problem.png
    :class: center
    :width: 500px


----

:data-x: r9
:data-y: r1
:data-scale: 0.01

.. image:: img/importance_problem.png
    :class: center
    :width: 500px


----

:data-x: r30
:data-y: r1
:data-scale: 0.01

Unique Problem
=================================

.. image:: img/system_classic_problem_cost.png
    :class: center
    :width: 500px


----

:data-x: r-3
:data-y: r15.5
:data-rotate-x: 45
:data-scale: 0.04

.. image:: img/nietsche.png
    :class: center
    :width: 1300px


----

:data-x: r33
:data-y: r-15
:data-rotate-x: 0
:data-scale: 0.01

General Principles
=================================

----

:data-x: r-4
:data-y: r3
:data-scale: 0.01

.. image:: img/system_trx_level.png
    :class: center
    :width: 500px


----

:data-x: r9
:data-y: r1
:data-scale: 0.01

.. image:: img/assess_objective_borrow.png
    :class: center
    :width: 500px


----

:data-x: r30
:data-y: r1
:data-scale: 0.01

Outline
=================================

* :underline:`Borrowing via Gaussian Processes`

* Explore Exploit

* Feature Space and Gaming

* Conclusions & Further Work


----

:data-x: r0
:data-y: r0
:data-scale: 0.0001

Estimating log(Fraud Counts) As Gaussians
==========================================

.. image:: img/feature_space_gaussian.png
    :class: center
    :width: 600px


----

:data-x: r0
:data-y: r0.08
:data-rotate-x: 45
:data-scale: 0.0003

.. image:: img/feature_space_gaussian_posterior.png
    :class: center
    :width: 600px


----

:data-x: r0
:data-y: r0.5
:data-rotate-x: -45
:data-scale: 0.0006

.. image:: img/assess_objective_borrow_objective.png
    :class: center
    :width: 600px
