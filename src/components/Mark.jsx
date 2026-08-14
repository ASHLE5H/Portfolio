/**
 * The personal mark — a prompt caret drawn as one confident orange stroke.
 * Used in the hero card, the scroll badge and the closing rule.
 */
export default function Mark({ className = '' }) {
  return (
    <svg viewBox="0 0 48 40" fill="none" aria-hidden="true" className={className}>
      <path
        d="M9 7C9 7 21.5 14.8 21.5 19.8C21.5 24.8 9 32.5 9 32.5"
        stroke="currentColor"
        strokeWidth="5.4"
        strokeLinecap="round"
      />
      <path
        d="M25.5 32.5H40"
        stroke="currentColor"
        strokeWidth="5.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
