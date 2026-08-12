import styles from '../../pages/pages.module.css'

function Ltr({ children }) {
  return (
    <bdi className={styles.ltr} dir="ltr">
      {children}
    </bdi>
  )
}

function renderInline(text) {
  if (typeof text !== 'string') return text
  const parts = text.split(
    /(https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.\w+|\+?\d[\d\s-]{6,}\d|\b\d{5,}\b)/g
  )
  return parts.map((part, index) => {
    if (!part) return null
    if (
      /^https?:\/\//.test(part) ||
      /^[\w.+-]+@[\w.-]+\.\w+$/.test(part) ||
      /^\+?\d[\d\s-]{6,}\d$/.test(part) ||
      /^\d{5,}$/.test(part)
    ) {
      return <Ltr key={index}>{part}</Ltr>
    }
    return <span key={index}>{part}</span>
  })
}

function Block({ block }) {
  if (!block) return null

  if (block.type === 'p') {
    return <p>{renderInline(block.text)}</p>
  }

  if (block.type === 'list') {
    return (
      <ul className={styles.legalList}>
        {(block.items || []).map((item) => (
          <li key={item}>{renderInline(item)}</li>
        ))}
      </ul>
    )
  }

  if (block.type === 'kv') {
    return (
      <dl className={styles.legalKv}>
        {(block.items || []).map((item) => (
          <div className={styles.legalKvRow} key={item.label}>
            <dt>{item.label}</dt>
            <dd>{renderInline(item.value)}</dd>
          </div>
        ))}
      </dl>
    )
  }

  if (block.type === 'table') {
    return (
      <div className={styles.legalTableWrap}>
        <table className={styles.legalTable}>
          <thead>
            <tr>
              {(block.headers || []).map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(block.rows || []).map((row) => (
              <tr key={row.join('-')}>
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`}>{renderInline(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (block.type === 'sub') {
    return (
      <div className={styles.legalSub}>
        <h3>{block.title}</h3>
        {(block.blocks || []).map((child, index) => (
          <Block block={child} key={`${block.title}-${index}`} />
        ))}
      </div>
    )
  }

  return null
}

export default function LegalContent({ updated, sections }) {
  const safeSections = Array.isArray(sections) ? sections : []

  return (
    <article className={`container ${styles.legal}`}>
      <div className={styles.legalMeta}>{updated}</div>
      {safeSections.map((section) => (
        <section className={styles.legalSection} key={section.title}>
          <h2>{section.title}</h2>
          {(section.blocks || []).map((block, index) => (
            <Block block={block} key={`${section.title}-${index}`} />
          ))}
        </section>
      ))}
    </article>
  )
}
