# Chip Component

A chip component for interactive tags and selected filters.

## Usage

```html
<nova-chip type="neutral" label="Neutral"></nova-chip>
<nova-chip type="accent" label="Accent"></nova-chip>
<nova-chip type="success" label="Success"></nova-chip>
<nova-chip type="warning" label="Warning"></nova-chip>
<nova-chip type="danger" label="Danger"></nova-chip>
<nova-chip type="accent" label="Dismissible" dismissible="true"></nova-chip>
```

## Properties

- `type`: The style variant of the chip (neutral, accent, success, warning, danger)
- `label`: The text content to display in the chip
- `dismissible`: Whether the chip can be dismissed (boolean)

## Events

- `dismissed`: Emitted when a dismissible chip is dismissed