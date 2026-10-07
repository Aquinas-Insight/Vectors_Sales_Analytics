# Statistical Analysis Guide

## Why Statistics Matter

Statistics converts a dashboard from a reporting tool into a decision-support system.

## Standard Deviation

A high standard deviation means observations are widely spread around the mean.

Management interpretation:

> Performance is less predictable at the individual-observation level.

## Coefficient of Variation

CV normalizes standard deviation by the mean.

Management interpretation:

> Two products can have very different standard deviations but similar relative volatility.

Use CV when comparing segments with different scales.

## Skewness

- Positive skew: long right tail; a few unusually high values
- Negative skew: long left tail
- Near zero: more symmetric distribution

## Kurtosis

Kurtosis helps identify tail heaviness and extreme observations.

Do not interpret it alone; combine it with a histogram/box plot and outlier analysis.

## Outliers

An outlier is an observation unusually far from the rest of the distribution.

The business question is not simply:

> Should we remove it?

Instead ask:

> What caused it?

## Practical Management Rule

Never turn a statistical result directly into a business action without checking:

- Data quality
- Business context
- Magnitude
- Trend
- Segment
- Profit impact
