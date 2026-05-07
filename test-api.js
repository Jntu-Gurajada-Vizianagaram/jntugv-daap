
async function test() {
  try {
    const urls = [
      'https://api.jntugv.edu.in/api/updates/allnotifications',
    ];
    for (const url of urls) {
      console.log(`Trying ${url}...`);
      try {
        const r = await fetch(url);
        console.log(`  Status: ${r.status}`);
        if (r.ok) {
          const t = await r.text();
          console.log(`  Content: ${t.substring(0, 100)}...`);
        }
      } catch (e) {
        console.log(`  Error: ${e.message}`);
      }
    }
  } catch (e) {
    console.error(e);
  }
}
test();
