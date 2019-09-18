import PropTypes from "prop-types"
import React from "react"

const DaySection = ({
  backgroundHex,
  textHex,
  time,
  destination,
  children,
}) => (
  <section
    style={{
      background: `#${backgroundHex}`,
      color: `#${textHex}`,
      marginBottom: `0px`,
      padding: `2rem 1rem`,
      fontSize: `1.125rem`,
    }}
  >
    <h2
      style={{
        fontSize: `1rem`,
        fontWeight: `400`,
        letterSpacing: `0.4rem`,
        margin: `0 0 1rem 0`,
        textTransform: `uppercase`,
      }}
    >
      {time}
    </h2>
    <h1
      style={{
        fontSize: `2.25rem`,
        fontWeight: `400`,
        margin: `0`,
      }}
    >
      {destination}
    </h1>

    {children}
  </section>
)

DaySection.propTypes = {
  backgroundHex: PropTypes.string,
  time: PropTypes.string,
  destination: PropTypes.string,
  children: PropTypes.node.isRequired,
}

DaySection.defaultProps = {
  backgroundHex: `ff0000`,
  textHex: `000000`,
  time: `12:00 PM`,
  destination: `???`,
}

export default DaySection