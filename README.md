# Vectors Sales Analytics | Power BI + Excel Business Intelligence Project

![Power BI](https://img.shields.io/badge/Power%20BI-Dashboard-F2C811?logo=powerbi&logoColor=black)
![Excel](https://img.shields.io/badge/Excel-Statistical%20Analysis-217346?logo=microsoftexcel&logoColor=white)
![Analytics](https://img.shields.io/badge/Analytics-Descriptive%20to%20Prescriptive-5B5BD6)
![Status](https://img.shields.io/badge/Status-Portfolio%20Project-111B2F)

## Project Overview

**Vectors Sales Analytics** is a business intelligence and statistical analysis project designed to transform sales data into management-ready decisions.

The project combines:

- **Power BI** for interactive business reporting and dashboarding
- **Excel** for mathematical and statistical analysis
- **Descriptive analytics** to explain what happened
- **Diagnostic analytics** to investigate why it happened
- **Predictive analytics** to estimate what may happen next
- **Prescriptive analytics** to evaluate what management should do

> **Important:** This repository is intentionally documented without fabricated KPI values. Replace every `[ENTER VALUE]` placeholder with the verified value from the final analysis before publishing.

---

## Business Problem

A sales organization can generate large volumes of transactions without clearly understanding:

1. Which products and brands generate the most revenue?
2. Which products combine high revenue with healthy margins?
3. Is revenue growth driven by quantity, transactions, price/value per unit, or average order value?
4. Which markets and payment methods contribute most to performance?
5. How stable or volatile is sales performance?
6. Are there unusual transactions that materially distort the results?
7. What does the historical trend suggest about future revenue?
8. What price, volume, or cost changes could improve revenue and profitability?

The objective is to move from **reporting numbers** to **explaining business performance and recommending actions**.

---

## Key Business Questions

### Performance
- What is total revenue?
- What is gross profit and gross margin?
- How many units and transactions were recorded?
- What is the average order value?
- What is revenue per unit?

### Product & Profitability
- Which products and brands lead revenue?
- Which products have high/low gross margins?
- Which products fall into high-revenue/high-margin, high-revenue/low-margin, low-revenue/high-margin, and low-revenue/low-margin quadrants?

### Diagnostic Analysis
- What caused revenue to increase or decline?
- Is performance concentrated in a small number of products, brands, or markets?
- Are there important outliers?
- How strongly are revenue, quantity, transactions, and profit related?

### Prediction
- What is the monthly revenue trend?
- Is revenue accelerating or slowing?
- What does a moving average show?
- What does a regression/forecast indicate?
- How accurate is the forecast?

### Decision Support
- What happens if price changes?
- What happens if volume changes?
- What combination of price and volume can reach a target?
- Which action produces the strongest revenue/profit outcome?

---

## Technology Stack

| Tool | Purpose |
|---|---|
| Power BI | Interactive dashboard, data model, business reporting |
| DAX | KPI and analytical measures |
| Power Query | Data transformation and preparation |
| Microsoft Excel | Statistical analysis, scenarios, forecasting, what-if analysis |
| GitHub | Version control and project documentation |
| HTML/CSS/JavaScript | Portfolio presentation |

---

## Power BI Report Structure

The supplied report contains these main report pages:

### 1. Overview
Executive-level view of sales performance.

### 2. Product & Brand Performance
Analysis of product and brand contribution and performance.

### 3. Geo & Payment Method
Analysis of geographic performance and payment-method behavior.

### 4. Page 1
Additional report workspace available for future analytical expansion.

---

## Data Model

The report is centered around the following model components:

```text
                 ┌─────────────┐
                 │  Dim_Date   │
                 └──────┬──────┘
                        │
                        │
┌─────────────┐   ┌─────▼──────────────┐   ┌─────────────┐
│ Dim_Price   │──►│ Facts_Shoe_Sales   │◄──│ Dimensions  │
└─────────────┘   └────────────────────┘   └─────────────┘
                         │
                         ▼
                  measures_table
```

The business dimensions represented in the model include:

- Brand
- Category
- Product
- Color
- Country
- Payment Type
- Product Segment
- Company Name
- Design

Core analytical metrics include:

- Revenue
- Quantity
- Transactions
- Average Order Value (AOV)
- Gross Profit
- Gross Margin

---

## Analytical Framework

### 1. Descriptive Analytics — What happened?

The first layer establishes the size and shape of the business.

Key measures:

- Total Revenue
- Total Gross Profit
- Gross Margin %
- Total Quantity
- Total Transactions
- AOV
- Revenue per Unit
- Mean
- Median
- Mode
- Range
- Variance
- Standard Deviation
- Coefficient of Variation
- Quartiles
- IQR
- Skewness
- Kurtosis

### 2. Diagnostic Analytics — Why did it happen?

The second layer investigates the drivers.

Methods:

- Revenue decomposition
- Product and brand contribution
- Pareto analysis
- Correlation analysis
- Outlier detection
- Product profitability matrix
- Country/market comparison
- Payment-method analysis

### 3. Predictive Analytics — What may happen?

The third layer studies time and future performance.

Methods:

- Monthly revenue trend
- Month-over-month growth
- 3-month moving average
- Linear trend
- Regression
- R²
- Forecast.LINEAR
- Forecast.ETS where appropriate
- Forecast validation using MAE/MAPE

### 4. Prescriptive Analytics — What should we do?

The final layer converts analysis into action.

Methods:

- What-if analysis
- Price scenarios
- Volume scenarios
- Cost scenarios
- Goal Seek
- Two-variable Data Tables
- Break-even analysis
- Target-based planning

---

## Revenue Decomposition

Two complementary decompositions are used.

### Product / pricing perspective

**Revenue = Quantity × Revenue per Unit**

This helps determine whether revenue changed because:

- More units were sold
- Fewer units were sold
- Revenue per unit increased
- Revenue per unit decreased
- Both volume and unit value changed

### Customer/order perspective

**Revenue = Transactions × AOV**

This helps determine whether revenue changed because:

- More transactions occurred
- Fewer transactions occurred
- Customers spent more per transaction
- Customers spent less per transaction

These two views should be used together rather than treated as competing methods.

---

## Product Profitability Matrix

The recommended portfolio view uses:

- **X-axis:** Revenue
- **Y-axis:** Gross Margin %

Median benchmarks are preferred when revenue or margin distributions are strongly skewed or contain influential outliers.

| Quadrant | Meaning | Management Response |
|---|---|---|
| High Revenue / High Margin | Strategic leaders | Protect, scale, prioritize inventory |
| High Revenue / Low Margin | Revenue drivers with margin pressure | Review price, discounts, sourcing and cost |
| Low Revenue / High Margin | Profitability opportunities | Increase visibility, distribution and demand |
| Low Revenue / Low Margin | Weak performers | Rationalize, reposition or test selectively |

---

## Statistical Risk Analysis

### Standard Deviation

Measures the absolute spread of observations around the mean.

**Management question:** How much does performance fluctuate?

### Coefficient of Variation

**CV = Standard Deviation / Mean**

CV compares volatility relative to the average.

**Management question:** How unstable is performance relative to its typical level?

### IQR and Outliers

The interquartile range is:

**IQR = Q3 − Q1**

Outlier fences:

- Lower Fence = Q1 − 1.5 × IQR
- Upper Fence = Q3 + 1.5 × IQR

Outliers should not automatically be deleted. They may represent:

- Data errors
- Large customers
- Premium products
- Promotions
- Bulk purchases
- Exceptional market events

---

## Time-Series Analysis

The project evaluates monthly revenue using:

1. Monthly aggregation
2. Month-over-month growth
3. 3-month moving average
4. Linear trend
5. Regression slope
6. R²
7. Forecast
8. Forecast error validation

A forecast is treated as a planning estimate, not a guaranteed outcome.

---

## Prescriptive Scenario Analysis

The scenario model allows management to test:

- Price increase/decrease
- Volume increase/decrease
- Cost changes
- Revenue targets
- Gross profit targets

Example scenario logic:

```text
Scenario Revenue
= Baseline Revenue
× (1 + Price Change)
× (1 + Volume Change)
```

For more granular analysis, scenario revenue can be modeled from:

```text
Price × Quantity
```

The final decision should consider **revenue, gross profit, and gross margin together**.

---

## Final Stakeholder Decision Framework

Every major finding should follow:

> **Number → Insight → Business Impact → Action**

Example:

> **Finding:** [ENTER VALUE]% of revenue comes from [ENTER PRODUCT/BRAND GROUP].  
> **Insight:** Revenue is highly concentrated.  
> **Business Impact:** A decline in the leading group could materially affect total revenue.  
> **Action:** Protect availability while developing secondary revenue sources.

---

## Results Placeholder

Replace this section after completing the final Excel analysis.

| KPI | Result |
|---|---:|
| Revenue | `[ENTER VALUE]` |
| Gross Profit | `[ENTER VALUE]` |
| Gross Margin | `[ENTER VALUE]%` |
| Quantity | `[ENTER VALUE]` |
| Transactions | `[ENTER VALUE]` |
| AOV | `[ENTER VALUE]` |
| Revenue / Unit | `[ENTER VALUE]` |
| Revenue Growth | `[ENTER VALUE]%` |
| Forecast Revenue | `[ENTER VALUE]` |

### Key Findings

1. **Performance:** `[ENTER VERIFIED FINDING]`
2. **Revenue driver:** `[ENTER VERIFIED FINDING]`
3. **Profitability:** `[ENTER VERIFIED FINDING]`
4. **Risk/volatility:** `[ENTER VERIFIED FINDING]`
5. **Forecast:** `[ENTER VERIFIED FINDING]`
6. **Recommended action:** `[ENTER VERIFIED ACTION]`

---

## Recommended Repository Structure

```text
Vectors-Sales-Analytics-Portfolio/
│
├── README.md
│
├── docs/
│   ├── business-case.md
│   ├── data-model.md
│   ├── analytical-framework.md
│   ├── statistical-analysis.md
│   └── stakeholder-summary.md
│
├── powerbi/
│   └── Vectors Sales Dashboard.pbix
│
├── excel/
│   └── Vectors_Business_Statistics_Analysis.xlsx
│
├── portfolio/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
│
└── .gitignore
```

---

## Portfolio Positioning

This is not presented as only a dashboard project.

It demonstrates the complete analytics cycle:

**Data → BI Model → Descriptive Statistics → Diagnosis → Forecast → Scenario Analysis → Business Decision**

That positioning makes the project stronger for Data Analyst, Business Intelligence Analyst and Business Analytics portfolios.

---

## Author

**[YOUR NAME]**

Data Analyst | Business Intelligence | Power BI | Excel | Statistical Analysis

- GitHub: `[YOUR GITHUB URL]`
- Portfolio: `[YOUR PORTFOLIO URL]`
- LinkedIn: `[YOUR LINKEDIN URL]`

---

## Disclaimer

This is a portfolio/business analytics project. Final numerical claims should be populated only from the verified underlying dataset and validated analysis.
