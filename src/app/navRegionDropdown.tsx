// components/FlagDropdown.tsx
import React, { useState } from "react"
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from "@mui/material"

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "hi", label: "हिंदी", flag: "🇮🇳" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
]

const FlagDropdown=()=>{
  const [language, setLanguage] = useState("en")

  const handleChange = (event: any) => {
    setLanguage(event.target.value)
  }

  const selected = languages.find((lang) => lang.code === language)

  return (
    <FormControl variant="outlined" size="small">
      <Select
        labelId="lang-select-label"
        value={language}
       
        onChange={handleChange}
        sx={{ minWidth: 100 }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code}>
            <Box display="flex" alignItems="center" gap={1}>
              <span style={{ fontSize: "1.2rem" }}>{lang.flag}</span>
              <Typography variant="body2">{lang.label}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default FlagDropdown;