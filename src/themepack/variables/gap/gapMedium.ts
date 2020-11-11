export default `
--gap: 16px;
--col-gap-third: calc(var(--gap) * 0.33);
--col-gap-half: calc(var(--gap) * 0.5);
--col-gap-two-thirds: calc(var(--gap) * 0.66);
--col-gap-full: var(--gap);
--col-gap-2x: calc(var(--gap) * 2);
--col-gap-3x: calc(var(--gap) * 3);

@media screen and (min-width: 737px) {
	--gap: 32px;
}

@media screen and (min-width: 1024px) {
	--gap: 40px;
}

@media screen and (min-width: 1280px) {
	--gap: 48px;
}
`
