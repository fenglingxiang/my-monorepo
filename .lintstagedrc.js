export default {
	"*.{js,ts,cjs,mjs,json,tsx,css,less,scss,html,vue,md}": ["cspell lint"],
	"*.{js,ts,vue,md}": ["prettier --write", "eslint"],
}
