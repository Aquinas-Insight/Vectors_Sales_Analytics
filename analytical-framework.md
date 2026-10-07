# Analytical Framework

## Layer 1 — Descriptive

### Central Tendency

Mean:
`=AVERAGE(range)`

Median:
`=MEDIAN(range)`

Mode:
`=MODE.SNGL(range)`

Use the median when the distribution is strongly skewed or contains influential outliers.

### Dispersion

Range:
`=MAX(range)-MIN(range)`

Variance:
`=VAR.S(range)`

Standard deviation:
`=STDEV.S(range)`

Coefficient of variation:
`=STDEV.S(range)/AVERAGE(range)`

### Distribution

Quartiles:
`=QUARTILE.INC(range,1)`
`=QUARTILE.INC(range,3)`

IQR:
`=Q3-Q1`

Skewness:
`=SKEW(range)`

Kurtosis:
`=KURT(range)`

---

## Layer 2 — Diagnostic

### Pareto

Rank products/brands by revenue and calculate cumulative contribution.

### Correlation

Use:

`=CORREL(revenue_range, quantity_range)`

Correlation indicates association, not causation.

### Outliers

Calculate Q1, Q3 and IQR.

Upper fence:

`Q3 + 1.5*IQR`

Lower fence:

`Q1 - 1.5*IQR`

### Profitability Matrix

X-axis: Revenue

Y-axis: Gross Margin %

Use median benchmark lines where distributions are skewed.

---

## Layer 3 — Predictive

Monthly revenue:

`=SUMIFS(...)`

MoM:

`=Current Month / Previous Month - 1`

Moving average:

`=AVERAGE(previous 3 months)`

Linear forecast:

`=FORECAST.LINEAR(future_period, revenue_values, period_values)`

Validate with a holdout period.

Recommended metrics:

- MAE
- MAPE
- Forecast bias

---

## Layer 4 — Prescriptive

Build scenario inputs:

- Price change %
- Volume change %
- Cost change %
- Target revenue

Then compare:

- Revenue
- Gross profit
- Gross margin

Use Goal Seek for target solving and a two-variable Data Table for sensitivity analysis.
