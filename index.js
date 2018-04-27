module.exports = {
  "plugins": [
    "stylelint-order"
  ],
  "rules": {
    "order/properties-order": [
      {
        "properties": [
          "content"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "flex",
          "position",
          "z-index",
          "box-sizing",
          "width",
          "height",
          "padding",
          "padding-top",
          "padding-right",
          "padding-bottom",
          "padding-left",
          "margin",
          "margin-top",
          "margin-right",
          "margin-bottom",
          "margin-left"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "top",
          "right",
          "bottom",
          "left"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "pointer-events",
          "cursor",
          "opacity",
          "color",
          "font",
          "font-size",
          "font-weight",
          "white-space"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "text-align",
          "text-shadow"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "border",
          "border-style",
          "border-width",
          "border-color",
          "border-radius"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "fill",
          "background",
          "box-shadow"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "transform",
          "transform-origin",
          "filter"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "transition"
        ]
      },
      {
        "emptyLineBefore": "always",
        "properties": [
          "display",
          "flex-direction",
          "align-items",
          "justify-content"
        ]
      }
    ]
  }
}
