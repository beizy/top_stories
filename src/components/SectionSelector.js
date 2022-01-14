import * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { v4 as uuidv4 } from "uuid"

export default function SectionSelector(props) {
  const { getSection } = props
  const sections = [
    "arts",
    "automobile",
    "books",
    "business",
    "briefing",
    "fashion",
    "food",
    "health",
    "home",
    "insider",
    "magazine",
    "movies",
    "nyregion",
    "obituaries",
    "opinion",
    "politics",
    "podcasts",
    "realestate",
    "science",
    "sports",
    "sundayrevi",
    "technology",
    "theater",
    "t-magazine",
    "travel",
    "upshot",
    "us",
    "well",
    "world",
  ]
  const menuItems = sections.map(ele => {
    return (
      <MenuItem value={ele} key={uuidv4()}>
        {ele.replace(ele[0], ele[0].toUpperCase())}
      </MenuItem>
    )
  })
  const [selected, setSelected] = React.useState("")

  const handleChange = event => {
    setSelected(event.target.value)
    getSection(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Section</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="Section"
          onChange={handleChange}
        >
          {menuItems}
        </Select>
      </FormControl>
    </Box>
  )
}
