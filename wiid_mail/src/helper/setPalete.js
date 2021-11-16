function setPalete(tema, setBackGround, setBoxShadow, setFontPrimary, setFontSecondary) {
    if(tema === 'dark'){
        setBackGround('#121212')
        setBoxShadow('0px 2px 1px -1px rgb(255 255 255 / 20%), 0px 1px 1px 0px rgb(255 255 255 / 14%), 0px 1px 3px 0px rgb(255 255 255 / 12%)')
        setFontPrimary('#fff')
        setFontSecondary('#b8b8b8')
    }
    if(tema === 'light'){
        setBackGround('#121212')
        setBoxShadow('0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)')
        setFontPrimary('#fff')
        setFontSecondary('#919191')
    }
}

export default setPalete;