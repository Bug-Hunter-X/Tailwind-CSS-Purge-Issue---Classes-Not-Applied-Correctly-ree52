# Tailwind CSS Purge Issue

This repository demonstrates a common issue encountered when using Tailwind CSS: unexpected behavior where Tailwind classes are not applied correctly. This issue is usually caused by incorrect configuration of the `purge` option in the Tailwind configuration file.

## Problem

The Tailwind classes do not appear to be applied properly in the generated CSS. This commonly happens when `purge` is misconfigured or when certain files containing Tailwind classes aren't correctly included in the purge configuration. 

## Solution

This issue is resolved by properly configuring the `purge` option in your Tailwind config file. Ensure that the paths specified in the `purge` array correctly point to all the files that use Tailwind CSS classes.  You may also need to adjust your build process to ensure Tailwind is processing the correct files. 

## Files

* `bug.js`: Demonstrates incorrect Tailwind CSS configuration.
* `bugSolution.js`: Provides a corrected configuration with detailed comments.