export class Slug {
  constructor(public value: string) {}

  /**
   * Receives a string and normalize it as a slug
   *
   * Example: "Example title" => "example-title"
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
      .replace(/_/, '-')

    return new Slug(slugText)
  }
}
