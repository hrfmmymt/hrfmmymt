const { h } = require('ink')
const SelectInput = require('ink-select-input')
const opn = require('opn')
const open = url => opn(url, { wait: false })
const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    label: 'Website',
    url: 'https://hrfmmymt.github.io'
  },
  {
    label: 'Portfolio',
    url: 'https://hrfmmymt.com'
  },
  {
    label: 'Twitter',
    url: 'https://twitter.com/hrfmmymt'
  },
  {
    label: 'GitHub',
    url: 'https://github.com/hrfmmymt'
  },
  {
    label: 'Quit',
    action() {
      process.exit() // eslint-disable-line unicorn/no-process-exit
    }
  }
]

module.exports = () => (
  <div>
    <br />
    <div>
      <span>{"hi everyone! i'm always goofing off on the internet."}</span>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
