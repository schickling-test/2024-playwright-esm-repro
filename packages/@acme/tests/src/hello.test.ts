import { greet } from '@acme/lib' // doesn't work
// import { greet} from '@acme/lib/dist/index.js' // works
import { test } from '@playwright/test'

test(
  'hello',
  async ({ page }) => {
    greet()

  }
)
