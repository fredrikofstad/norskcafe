/**
 * Capitalizes the first letter of a string.
 * @param string The input string.
 * @returns The string with its first letter capitalized.
 */
export function capitalizeFirst(string: string): string {
    if (!string) return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}