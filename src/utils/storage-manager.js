var hasLocalStorage = typeof Storage !== "undefined"

/**
 * Simple object to handle read-write to localStorage
 */
export var localStorageManager = {
  get(storageKey, init) {
    if (!hasLocalStorage) {
      return init
    }

    var maybeValue = window.localStorage.getItem(storageKey)
    return maybeValue != null ? maybeValue : init
  },

  set(storageKey, value) {
    if (hasLocalStorage) {
      window.localStorage.setItem(storageKey, value)
    }
  },

  type: "localStorage",
}
/**
 * Simple object to handle read-write to cookies
 */

export var cookieStorageManager = function cookieStorageManager(cookies) {
  if (cookies === void 0) {
    cookies = ""
  }

  return {
    get(storageKey, init) {
      var match = cookies.match(new RegExp("(^| )" + storageKey + "=([^;]+)"))

      if (match) {
        return match[2]
      }

      return init
    },

    set(storageKey, value) {
      document.cookie = storageKey + "=" + value + "; max-age=31536000; path=/"
    },

    type: "cookie",
  }
}
