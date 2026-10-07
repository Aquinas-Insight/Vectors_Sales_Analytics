# Vectors Sales Analytics — Business Intelligence & Statistical Analysis

![Power BI](https://img.shields.io/badge/Power%20BI-Business%20Intelligence-F2C811?logo=powerbi\&logoColor=black)
![Excel](https://img.shields.io/badge/Excel-Statistical%20Analysis-217346?logo=microsoft-excel\&logoColor=white)
![Analytics](https://img.shields.io/badge/Analytics-Descriptive%20%7C%20Diagnostic%20%7C%20Predictive%20%7C%20Prescriptive-4F46E5)
![Status](https://img.shields.io/badge/Project-Portfolio-0F766E)

## Project Overview

**Vectors Sales Analytics** is a Business Intelligence and statistical analysis project developed to evaluate the overall performance of a sales business and translate data into actionable management decisions.

The project combines **Power BI** for interactive business reporting with **Excel** for statistical, mathematical, regression and scenario analysis.

Rather than focusing only on reporting historical numbers, the project follows a complete analytics framework:

> **Descriptive → Diagnostic → Predictive → Prescriptive**

The analysis is structured around eight key business questions that management would need to answer in order to understand performance, identify the major drivers of revenue and profitability, evaluate market and customer behavior, and determine appropriate actions.

---

# Business Questions

The project answers the following eight questions:

### 1. How is the business performing overall?

This establishes the overall health of the business using key performance indicators such as:

* Revenue
* Gross Profit
* Gross Margin
* Quantity Sold
* Transactions
* Average Order Value (AOV)
* Revenue per Unit
* Profit per Unit

The objective is to establish the business baseline before investigating individual products, markets or customer behavior.

---

### 2. How have revenue and profit changed over time?

This evaluates business performance across time.

The analysis examines:

* Revenue by year
* Revenue by quarter
* Revenue by month
* Gross profit over time
* Gross margin over time
* Month-over-month revenue movement
* Revenue growth and decline periods
* Relationship between revenue and profitability over time

The objective is to determine whether the business is experiencing sustained growth, stagnation, volatility or decline.

---

### 3. Which products are driving sales?

This question focuses on **sales contribution**.

The analysis evaluates:

* Revenue by product
* Quantity by product
* Transactions by product
* Revenue contribution %
* Product ranking
* Pareto concentration

The objective is to identify the products responsible for the largest share of sales.

A product that generates high revenue is considered a major **sales driver**, but high sales alone do not necessarily mean high profitability.

---

### 4. Which products are driving profitability?

This question moves beyond revenue to evaluate **profitability quality**.

The analysis considers:

* Gross Profit
* Gross Margin %
* Revenue
* Profit per Unit
* Product-level profitability

A product profitability matrix is used to classify products into four groups:

| Quadrant                   | Business Meaning                   | Management Focus               |
| -------------------------- | ---------------------------------- | ------------------------------ |
| High Revenue / High Margin | Strategic performers               | Protect and scale              |
| High Revenue / Low Margin  | Sales leaders with margin pressure | Improve pricing/cost structure |
| Low Revenue / High Margin  | Profit opportunities               | Increase demand                |
| Low Revenue / Low Margin   | Weak performers                    | Review or rationalize          |

Median values can be used as quadrant benchmarks where the data is skewed or contains influential outliers.

---

### 5. Which categories and brands perform best?

This evaluates performance at higher business levels.

The analysis compares:

* Category Revenue
* Category Gross Profit
* Category Gross Margin
* Brand Revenue
* Brand Gross Profit
* Brand Gross Margin
* Quantity and transaction contribution

The objective is to determine which categories and brands are strategically important and whether their sales performance is supported by healthy profitability.

---

### 6. Which countries contribute the most to the business?

This evaluates geographical contribution.

The analysis examines:

* Revenue by country
* Gross Profit by country
* Gross Margin by country
* Quantity by country
* Transaction contribution
* Country revenue concentration

The objective is to identify the most important markets and determine whether business performance is highly dependent on a small number of countries.

---

### 7. What purchasing patterns can we identify from payment method and product preferences?

This investigates customer purchasing behavior using available transactional dimensions.

The analysis compares:

* Payment Method
* Product
* Category
* Brand
* Product Segment
* Transactions
* Revenue
* AOV

The objective is to identify purchasing patterns and determine whether certain payment methods or product preferences are associated with particular sales behaviors.

This can support decisions around:

* Payment-channel optimization
* Customer experience
* Product positioning
* Promotions
* Cross-selling opportunities

---

### 8. What actions should management take based on the findings?

The final question converts analytical findings into business decisions.

Recommendations are based on evidence from:

* Overall performance
* Revenue and profit trends
* Product sales contribution
* Product profitability
* Category and brand performance
* Country contribution
* Purchasing behavior
* Regression analysis
* What-if and scenario analysis

The objective is not simply to describe the data, but to determine **what management should do next**.

---

# Four Types of Statistical/Business Analysis

The project maintains four analytical levels.

## 1. Descriptive Analysis — What Happened?

Descriptive analysis summarizes the historical data and establishes the current state of the business.

### Business applications

* Overall business performance
* Revenue and profit
* Product performance
* Category and brand performance
* Country performance
* Payment-method performance
* Purchasing patterns

### Statistical techniques

**Central tendency**

* Mean
* Median
* Mode

**Dispersion**

* Range
* Variance
* Standard Deviation
* Coefficient of Variation

**Distribution**

* Quartiles
* Interquartile Range
* Skewness
* Kurtosis

These statistics help management understand not only the average performance but also the consistency and distribution of the business results.

---

# 2. Diagnostic Analysis — Why Did It Happen?

Diagnostic analysis investigates the factors behind observed business performance.

The analysis asks:

> Why did revenue increase or decrease?

> Why are some products more profitable than others?

> Why does one brand outperform another?

> Why is performance concentrated in certain countries?

### Diagnostic techniques

* Revenue decomposition
* Product contribution analysis
* Pareto analysis
* Correlation analysis
* Outlier analysis
* Product profitability matrix
* Segment comparison

### Revenue decomposition

Two complementary approaches are used.

#### Product and pricing perspective

**Revenue = Quantity × Revenue per Unit**

This determines whether revenue changed because of:

* Changes in quantity
* Changes in revenue per unit
* Changes in both

#### Transaction and customer-value perspective

**Revenue = Transactions × AOV**

This determines whether revenue changed because of:

* More/fewer transactions
* Higher/lower average order value

These analyses help management identify the actual drivers behind revenue movement.

---

# 3. Predictive Analysis — What Is Likely to Happen?

For this project, **predictive analysis is intentionally limited to regression analysis**.

No separate forecasting method such as exponential smoothing or ETS is used.

### Regression analysis

Regression is used to examine the relationship between business variables and estimate how changes in an explanatory variable are associated with changes in a target variable.

Possible applications include:

* Revenue over time
* Revenue versus quantity
* Revenue versus transactions
* Profit versus revenue
* Product-level relationships
* Other relevant business-driver relationships

### Key regression outputs

* Slope
* Intercept
* R²
* Predicted value
* Regression equation
* Residual/error analysis

### Business interpretation

The regression model helps answer questions such as:

> Is there a measurable relationship between sales volume and revenue?

> How much does revenue change as the business changes in a particular driver?

> How well does the explanatory variable account for changes in the outcome?

Regression results are interpreted as **evidence for decision-making**, not as guaranteed future outcomes.

---

# 4. Prescriptive Analysis — What Should Management Do?

Prescriptive analysis converts the findings into potential business actions.

The project uses scenario-based decision analysis.

### Methods include

* What-if analysis
* Price scenarios
* Volume scenarios
* Cost scenarios
* Goal Seek
* Two-variable Data Tables
* Target analysis
* Break-even analysis

### Example

Management may ask:

> What happens to revenue and gross profit if price increases by 5% while sales volume decreases by 2%?

The scenario analysis compares:

* Baseline revenue
* Scenario revenue
* Baseline gross profit
* Scenario gross profit
* Baseline gross margin
* Scenario gross margin

This allows management to evaluate a decision before implementing it.

---

# Statistical Analysis Framework

| Analysis     | Main Question             | Key Techniques                                      |
| ------------ | ------------------------- | --------------------------------------------------- |
| Descriptive  | What happened?            | Mean, Median, SD, CV, Quartiles, Skewness, Kurtosis |
| Diagnostic   | Why did it happen?        | Decomposition, Pareto, Correlation, Outliers        |
| Predictive   | What is likely to happen? | **Regression analysis**                             |
| Prescriptive | What should we do?        | What-if, Goal Seek, Data Tables, Scenarios          |

---

# Power BI Dashboard

The Power BI report provides the interactive business intelligence layer.

### Main analytical areas

**Overview**

Provides the overall business performance view.

**Product & Brand Performance**

Evaluates product, category and brand contribution.

**Geo & Payment Method**

Evaluates country and payment-method performance.

These dashboards provide the interactive foundation for the deeper statistical and decision analysis performed in Excel.

---

# Data Model

The Power BI model is centered around:

* `Facts_Shoe_Sales`
* `Dim_Date`
* `Dim_Price`
* `measures_table`

Business dimensions include:

* Brand
* Category
* Product
* Color
* Country
* Payment Type
* Product Segment
* Company Name
* Design

Core business measures include:

* Revenue
* Quantity
* Transactions
* AOV
* Gross Profit
* Gross Margin

---

# Business Decision Framework

The project follows a simple stakeholder communication framework:

> **Number → Insight → Business Impact → Action**

For example:

**Number:** `[ENTER VERIFIED RESULT]`

**Insight:** `[ENTER WHAT THE NUMBER MEANS]`

**Business Impact:** `[ENTER BUSINESS CONSEQUENCE]`

**Action:** `[ENTER MANAGEMENT ACTION]`

This ensures that statistical analysis does not remain a collection of formulas but becomes a business decision tool.

---

# Key Results

The final verified results should be inserted below.

| KPI              |           Result |
| ---------------- | ---------------: |
| Total Revenue    |  `[ENTER VALUE]` |
| Gross Profit     |  `[ENTER VALUE]` |
| Gross Margin     | `[ENTER VALUE]%` |
| Quantity Sold    |  `[ENTER VALUE]` |
| Transactions     |  `[ENTER VALUE]` |
| AOV              |  `[ENTER VALUE]` |
| Revenue per Unit |  `[ENTER VALUE]` |
| Revenue Growth   | `[ENTER VALUE]%` |
| Regression R²    |  `[ENTER VALUE]` |

### Major Findings

**Overall performance:**
`[ENTER VERIFIED FINDING]`

**Revenue trend:**
`[ENTER VERIFIED FINDING]`

**Sales-driving products:**
`[ENTER VERIFIED FINDING]`

**Profitability-driving products:**
`[ENTER VERIFIED FINDING]`

**Best categories/brands:**
`[ENTER VERIFIED FINDING]`

**Leading countries:**
`[ENTER VERIFIED FINDING]`

**Purchasing behavior:**
`[ENTER VERIFIED FINDING]`

**Regression finding:**
`[ENTER VERIFIED FINDING]`

**Management action:**
`[ENTER VERIFIED RECOMMENDATION]`

---

# Final Business Perspective

The purpose of the Vectors Sales Analytics project is to move beyond:

> **"What are our sales?"**

toward:

> **"What is driving our sales, where are we making money, what relationships exist in the business, and what should management do about it?"**

The project therefore connects **Business Intelligence, Statistics, Regression Analysis and Decision Support** into one analytical workflow.

---

## Author

**Emekwue Thomasaquinas Obinna**

Data Analyst | Business Intelligence | Power BI | Excel | Statistical Analysis

LinkedIn: `[YOUR LINKEDIN URL]`


