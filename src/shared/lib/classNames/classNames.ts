export type Mods = Record<string, string | boolean | undefined>
export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []) {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className, _]) => className),
    ].join(' ').trim();
}
