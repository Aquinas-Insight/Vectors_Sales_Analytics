# Data Model Documentation

## Core Fact

### `Facts_Shoe_Sales`

Central transactional/business fact table.

Expected analytical fields include measures or source columns for:

- Revenue
- Quantity
- Transactions
- Gross Profit

## Date Dimension

### `Dim_Date`

Used for:

- Year
- Quarter
- Month
- Time-series analysis
- MoM growth
- Moving averages
- Forecasting

## Price Dimension

### `Dim_Price`

Supports price/value analysis and scenario modeling.

## Measures

### `measures_table`

Central location for reusable business measures.

## Business Dimensions

The model includes business descriptors such as:

- Brand
- Category
- Product
- Color
- Country
- Payment Type
- Product Segment
- Company Name
- Design

## Modeling Approach

The model follows a dimensional/fact-oriented structure where the transactional fact is analyzed through business dimensions and a date dimension.

## Governance Note

Before publishing final results, validate:

- Relationship direction
- Date table continuity
- Granularity
- Duplicate records
- Blank keys
- Missing measures
- Data types
- Currency assumptions
