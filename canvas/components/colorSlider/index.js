Component({
  properties: {
    value: {
      type: Number,
      value: 0,
    },
  },
  data: {
    blockColor: '#ffffff',
  },

  lifetimes: {
    attached: function () {
      const rgb = hslToRgb((this.data.value / 100) * 360, 1, 0.5)
      this.setData({ blockColor: `rgb(${rgb.r},${rgb.g}, ${rgb.b})` })
    },
  },

  methods: {
    handleChange: function (event) {
      const rgb = hslToRgb((event.detail.value / 100) * 360, 1, 0.5)
      this.triggerEvent('change', rgb)
    },
    handleChanging: function (event) {
      const rgb = hslToRgb((event.detail.value / 100) * 360, 1, 0.5)
      this.setData({ blockColor: `rgb(${rgb.r},${rgb.g}, ${rgb.b})` })
      this.triggerEvent('changing', rgb)
    },
  },
})

function hslToRgb(h, s, l) {
  // 360, 1.0, 1.0
  const h0 = (((h % 360) + 360) % 360) / 360
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  const r = _hueToRgb(p, q, h0 + 1 / 3)
  const g = _hueToRgb(p, q, h0)
  const b = _hueToRgb(p, q, h0 - 1 / 3)
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) }
}

function _hueToRgb(p, q, t) {
  if (t < 0) t += 1
  if (t > 1) t -= 1
  if (t < 1 / 6) return p + (q - p) * 6 * t
  if (t < 1 / 2) return q
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
  return p
}
