:title: Dynamically Reweighting Experts' Advice
:data-transition-duration: 1000
:css: hovercraft.css


----

Dynamic Reweighting Of Experts' Advice
**************************************

With Recursive Least Squares As A Special Example
=================================================


----

Outline
=======


* *Introduction*

* Reweighting Idea

* Tracking The Best Expert

* Recursive Least Squares

* Conclusions


----

Use reStructuredText!
=====================

* You can use your favorite text-editor!

* Many tools available: Landslide, S5

* Convenient (and powerful!)

.. note::

    You also have a clock and a timer, so you know how much time you have
    left.

----

But then there was Prezi
========================

Sliding from left to right is no longer enough.
You need to be able to...

.. note::

    If you click on the timer it restarts from zero. This is handy when you
    are rehearsing the presentation and need to make sure it fits in the time
    allocated.

----

:data-y: r1000

...pan...
=========

.. note::

    If you have more notes than fit in the console, you can scroll down, but
    more handily, you can scroll the text up by pressing space bar.

----

:data-rotate: 90

...rotate...
============

.. note::

   If there isn't more text to scroll up, space bar will go to the next
   slide. Therefore you, as a presenter, just press space every time you run
   out of things to say!

----

:data-x: r0
:data-y: r500
:data-scale: 0.1

...and zoom!
============

.. note::

    Zooming is cool. But one day it will grow old as well. What will we do
    then to make presentations interesting?

----

:data-x: r-800
:data-scale: 1

But Prezi is a GUI
==================

So we are back to square one.

(And it is closed source to boot)

.. note::

    It's probably back to making bad jokes again.

----

What about impress.js?
======================

It's open source!

Supports pan, tilt and zoom!


----

:id: ThreeD
:data-y: r1200
:data-rotate-x: 180

In three dimensions!
====================

*But...*

.. note::

    Wow! 3D! You didn't see that one coming, did you?

----


It's HTML...
============

Not a friendly format to edit

----

:data-x: r800

...and manual positioning
=========================

So inserting a slide means

repositioning all the following slides!


.. note::

    The endless repositioning of slides is what prompted me to write
    Hovercraft! in the first place.

----

:id: thequestion
:data-x: r0
:data-y: r-1200

*Is there no solution?*
=======================

Of course there is!

.. note::

    What would be the point of this slide show if I didn't have a solution?
    Duh!

----

:data-rotate-y: 180
:data-scale: 3
:data-x: r-2500
:data-y: r0

Introducing **Hovercraft!**
===========================

.. note::

    TADA!

----

:data-x: r-3000
:data-scale: 1

reStructuredText
----------------

plus
....

impress.js
----------

plus
....

impressConsole.js
-----------------

plus
....

positioning!
------------

----

:data-y: r-1200

Position slides
===============

* Automatically!
* Absolutely!
* Relative to the previous slide!
* Along an SVG path!


.. note::

    That SVG path support was a lot of work. And all I used it for was to
    position the slides in circles.

----

Presenter console!
==================

* A view of the current slide
* A view of the next slide
* Your notes
* A clock
* A timer

.. note::

    You found the presenter console already!

----

**Hovercraft!**
===============

.. image:: images/hovercraft_logo.png

The merge of convenience and cool!

.. note::

    A slogan: The ad-mans best friend!

----

:data-x: 0
:data-y: 2500
:data-z: 4000
:data-rotate-x: 90

**Hovercraft!**
===============

On Github:

https://github.com/regebro/hovercraft

.. note::

    Fork and contribute!

