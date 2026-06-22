const modules = import.meta.glob<string>("$lib/assets/projects/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const urlMap = new Map<string, string>();
for (const [path, url] of Object.entries(modules)) {
  const filename = path.split("/").pop()!;
  urlMap.set(filename, url);
}

export function getProjectImgUrl(filename: string): string {
  return urlMap.get(filename) ?? filename;
}
