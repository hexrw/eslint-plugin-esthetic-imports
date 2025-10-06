// Example unsorted imports (before fix)
import a from "a"
import medium from "medium-package"
import veryLongPackageName from "very-long-package-name"

// After running ESLint with --fix and default DESC order:
// import veryLongPackageName from "very-long-package-name"
// import medium from "medium-package"
// import a from "a"

console.log(a, medium, veryLongPackageName)
