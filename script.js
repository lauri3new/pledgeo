const axios = require('axios')

const pbpClient = axios.create({
  baseURL: "baseUrl",
  headers: {
    authorization: "<secretKey>"
  }
})

const orgIds = [
  "organisation_000000C704bGxqHpKeiPxRKcSiphk",
"organisation_000000C704SCGccR3tHs9jTpeyFks",
"organisation_000000C2rgxUmF1lHjeMxdJXKTfuG",
"organisation_000000CEevXQnrxsB4Uo77dpAb62L",
"organisation_000000CEevZQL8BI8OHmEE43PG5HV",
"organisation_000000C2rgxbdhAaEuoWRj8q4RyDx",
"organisation_000000C8xue5hUA50ojhkSyVAuj1Q",
"organisation_000000C2rgkzLwwtQO9570oNXZniS",
"organisation_000000C2rgPjond69ohhuxwLAqFS3",
"organisation_000000C2rgxH3Kk7NNK3zRevqX4Uz",
"organisation_000000C2rgl6DP5iNZJEb6dgHY6CQ",
"organisation_000000C7049iHorBeowK62ILpYC3p",
"organisation_000000C2rh6u3p7cQ2ZNDceEM99O6",
"organisation_000000C2rgrqo5lqbYIZCq77VsNqs",
"organisation_000000C2rgN57uDNFUm2Gi55NV3Qz",
"organisation_000000C2rhECxmVrPvNTFpGBIKvuI",
"organisation_000000C2rgNWZimf4DQeD5OILOFal",
"organisation_000000CEevYQa2ttXloOrNcKjVO1B",
"organisation_000000C2rgxpMbSE9H8pPunRYOZWm",
"organisation_000000C7049Gq0Htq6Hi9ez8rezm6",
"organisation_000000C704BawXH9ssivLdMUR5I0J",
"organisation_000000C2rgxpMbSE9H8pPunRYOZWp",
"organisation_000000C704A9jdQTTXaw2PbYnROSK",
"organisation_000000C704BNDczVyWOcNRhsx8grL",
"organisation_000000C2rgQ4PA3Z1MCANFQFOl8zC",
"organisation_000000C704BGMAqh1LEStLsaDAOIw",
"organisation_000000C704ANSXi7NtvF0bGAHNzbZ",
"organisation_000000C704ChZ4hNQgMSCZdVqoHtf",
"organisation_000000C704D29R7qIDquer7Q4jBei",
"organisation_000000C704CoQWqCNrWbgfSoamaQg",
"organisation_000000C2rhKINkL3upNswzlo4pQGC",
"organisation_000000C704ETMKyWhYyty4sLiN5DU",
"organisation_000000C704D29R7qIDquer7Q4jBfZ",
"organisation_000000C704EnwhOzZ6TMQMMFwHyxV",
"organisation_000000C704DoBc7ayTzz3VuXGXHim",
"organisation_000000C704Euo9XoWHdVuSBYgGHZm",
"organisation_000000C704GnSrxmkLQ7A3FhHnNWR",
"organisation_000000C704GnSrxmkLQ7A3FhHnNXm",
"organisation_000000C704FMFy76L0I7qpUle9Ttk",
"organisation_000000C704FMFy76L0I7qpUle9TuQ",
"organisation_000000C704FT7QFvIBSHKvK4O7mWl",
"organisation_000000C704FgqKXZCXmaJ6yfs4Nfr",
"organisation_000000C704GSsVXJsnvehlln3sTm4",
"organisation_000000C2rhCetQWM3P5KSVfwuijiv",
"organisation_000000C2rgxH3Kk7NNK3zRevqX4Vb",
"organisation_000000C2rgwV19kMh7AzamroeiyMg",
"organisation_000000C704K0T25cQZAYEmFSn04Sa",
"organisation_000000C704Ig7aNkyPCiPeJptKTT4",
"organisation_000000C704HSdaoiTQP24cDVjdB0T",
"organisation_000000C2rgNrA5D7vkv6fMsCZJ9PH",
"organisation_000000C704KtMfEC40Tm7WrsimT8c",
"organisation_000000C704JtbZwnTO0OkgQA31lrJ",
"organisation_000000C2rgNrA5D7vkv6fMsCZJ9Q4",
"organisation_000000C704I7oJfeCVNwzBBKBSyVr",
"organisation_000000C704J7ZOx2n7rKM1d2rDfpQ",
"organisation_000000C704JS9lNVefLmoJ6x58ZaJ",
"organisation_000000C704NKKeMH3y58nb4X2B425",
"organisation_000000C9C82Eis5RhK5fKqkAqV0BC",
"organisation_000000C8xuOvaIfUF9IkFac5afett",
"organisation_000000C704PXZjCi9ZMCVTcZrd3jy",
"organisation_000000C704ISOg6742sPRSfEPNsGm",
"organisation_000000C704KmVD5N6pJcdR2ZyoAaN",
"organisation_000000C704LRfvwIpuIXY00OQdy4i",
"organisation_000000C704Nsdv4NprtuE4D2k2YvR",
"organisation_000000C704LfOqDwkGcqWBezuaZF8",
"organisation_000000C704MKZZ4sTLblQkcoMQMmX",
"organisation_000000C704MRR1DhQWluuqS76OfMr",
"organisation_000000C704Mm1NeAI4GNN7w1KJZ6x",
"organisation_000000C704MsspmzFFQWrDlK4Hrg0",
"organisation_000000C704PCzMmFI1rk3C8fdi9wb",
"organisation_000000C704MsspmzFFQWrDlK4Hrfp",
"organisation_000000C704PCzMmFI1rk3C8fdi9x9",
"organisation_000000C704Nsdv4NprtuE4D2k2YvH",
"organisation_000000C704cURpqrpdW6ITQwcQ88c",
"organisation_000000C704PCzMmFI1rk3C8fdi9vo",
"organisation_000000C704NDTCDS6muzJVFEIClPE",
"organisation_000000C704PCzMmFI1rk3C8fdi9yX",
"organisation_000000C704PsA5dB16qexl6U5XxU6",
"organisation_000000C704UWN9bh6fj5LhrBEOY11",
"organisation_000000C704QrvAuZbjK2KbYClIeis",
"organisation_000000C704UdEbkW3qtEpngTyMqdu",
"organisation_000000C704QCkS3dseL7Q2aOJSrDg",
"organisation_000000C704UWN9bh6fj5LhrBEOY1a",
"organisation_000000C704Uk63tL123OJtVmiL9D2",
"organisation_000000C704SJ84lG14S1dpJ8OwYJ1",
"organisation_000000C704VPGmkGk72JESTbAAwhh",
"organisation_000000C704SPzWu4yFcB7v8R8uquW",
"organisation_000000C704TPkcBTYs5YUla9ofYDh",
"organisation_000000C704SPzWu4yFcB7v8R8uqwW",
"organisation_000000C704SdiRBisbwU66n2crS6R",
"organisation_000000C704UIeFK3CJOmNWCZkRwqZ",
"organisation_000000C704TkKybwQPa0x3442aRwu",
"organisation_000000C704Ty3staKluJvEifWX39E",
"organisation_000000C704TdTWT7TEPrSxElIc9NS",
"organisation_000000C704ZitUIJy8QHA7kO56dWN",
"organisation_000000C704UWN9bh6fj5LhrBEOY4O",
"organisation_000000C704Vczh1ueTMcCe8Ce7XrT",
"organisation_000000C704Yj8P0vNVwtnHIfPLwHV",
"organisation_000000C704WIAPsqNYLX7D615xLMA",
"organisation_000000C704WckmJJF5pzZUZvJsFBO",
"organisation_000000C704ZwcOZxsUka8JOzZ3Eeh",
"organisation_000000C704Y3xg9zeQxysiKqxW8l5",
"organisation_000000C704YHgaRdYnIHqtzSRSjxD",
"organisation_000000C8xudeFfanC655o5fID1WgD",
"organisation_000000C704WxL8jm6dKS1m3pXn8s6",
"organisation_000000C704X4Casb3oUbVrt8HlRTb",
"organisation_000000C704Y3xg9zeQxysiKqxW8m1",
"organisation_000000C704aieZZiYkteWyC6krKld",
"organisation_000000C704a3TqimpfujcPEIJ1XHO",
"organisation_000000C704Yj8P0vNVwtnHIfPLwHu",
"organisation_000000C704ZOJ7rr6avohqGTrBjmR",
"organisation_000000C704bUgkZTF12ivczDwfQqz",
"organisation_000000C704bA6O90NTYGTLVJikX6O",
"organisation_000000C704c9rTQOy61dqBx2OVENh",
"organisation_000000CLfVr4v9yUaF1RoImQBTsRM",
"organisation_000000C704c301Ha0urUM67jeWvpf",
"organisation_000000C704c9rTQOy61dqBx2OVEMD",
"organisation_000000C704cURpqrpdW6ITQwcQ88a",
"organisation_000000C704cGivZDvHBnKHmL8TWw2",
"organisation_000000C704cURpqrpdW6ITQwcQ8AX",
"organisation_000000C704cbJHzgmogFmZGFMOQke",
"organisation_000000C70493760FvjxPBTKXNiOYE",
"organisation_000000C704TWc4KIW3FhyrPSYdqlg",
"organisation_000000CDPTyfeDejbuhox13tlxDgg",
"organisation_000000C7049bQMiMhdmAbwT35ZtX6",
"organisation_000000C704ANSXi7NtvF0bGAHNzZA",
"organisation_000000C704AGb5ZIQil5WVQrXPgyf",
"organisation_000000C704I0wrWpFKDnV5M1RUfwZ",
"organisation_000000C704ChZ4hNQgMSCZdVqoHtQ",
"organisation_000000C704CTqAPjWK29ENyuMrgjS",
"organisation_000000C704E8lyY3q1URVnORUSBSZ",
"organisation_000000C704AvloQE9nk0R4OfzFUXk",
"organisation_000000C704H83EOFbsuZcKjbViHGG",
"organisation_000000C704KYmInjCSzJfFNyUrZOz",
"organisation_000000C704ItqUfOslX1NpyRNH4cm",
"organisation_000000C704K0T25cQZAYEmFSn04Un",
"organisation_000000C704SrRLTMmyGn4IRe6o3EA",
"organisation_000000C704Nsdv4NprtuE4D2k2Yus",
"organisation_000000C704TrCQklNakAR8tMmYkVJ",
"organisation_000000C704Mf9vVLKt6Dt26iaLGUr",
"organisation_000000C704Xx6E1AhFnpOcVYDXq8n",
"organisation_000000CDPU7Itckq3xTkoLbTbobIo",
"organisation_000000C704UBmnBEF8EctQNH0TeIb",
"organisation_000000C704Vczh1ueTMcCe8Ce7Xv6",
"organisation_000000C8xuWfw4d13klSEAXFUkdpw",
"organisation_000000C704TWc4KIW3FhyrPSYdqkW",
"organisation_000000C704VPGmkGk72JESTbAAwgH",
"organisation_000000C704XjNJjWmtTWQQqwjbEz8",
"organisation_000000C704Yj8P0vNVwtnHIfPLwI0",
"organisation_000000C70493760FvjxPBTKXNiOYo",
"organisation_000000C704ZitUIJy8QHA7kO56dUy",
"organisation_000000C704b3Ew0BQIO6zFg0ymEXt",
"organisation_000000C704Ypzr9kKh73HN7y9KEqJ",
"organisation_000000C704apW1iXVw3o141PUpdNt",
"organisation_000000C704awNTrMT7DxV9qiEnvw2",
"organisation_000000C8xuMGtPFlKpN4bKkpnKSrh",
"organisation_000000C7049Gq0Htq6Hi9ez8rezlm",
"organisation_000000C7049bQMiMhdmAbwT35ZtVw",
"organisation_000000C704CoQWqCNrWbgfSoamaV5",
"organisation_000000C704B2dGZ36yu9vADyjDn6K",
"organisation_000000C704ChZ4hNQgMSCZdVqoHtN",
"organisation_000000C704CoQWqCNrWbgfSoamaUS",
"organisation_000000C704CoQWqCNrWbgfSoamaRP",
"organisation_000000C704ETMKyWhYyty4sLiN5CT",
"organisation_000000C704DTbFh86wVWbEQd2cNxZ",
"organisation_000000C704Dv34GPvfA8Xbjq0VaKu",
"organisation_000000C704ETMKyWhYyty4sLiN5Cd",
"organisation_000000C704JtbZwnTO0OkgQA31ltE",
"organisation_000000C704KtMfEC40Tm7WrsimT9O",
"organisation_000000C704H83EOFbsuZcKjbViHFy",
"organisation_000000C704QCkS3dseL7Q2aOJSrEC",
"organisation_000000C704Nev0mjvVZbFsYRG5xjt",
"organisation_000000C704QJbuCSppVGu8Ph3R9nc",
"organisation_000000C704Ql3ilkeY9sqViu1KM84",
"organisation_000000C704OlXYCxTJD86opSfoxdc",
"organisation_000000C704TC1htpeVlFWZvYKix1l",
"organisation_000000C704RQERcgNd8nl4giTA9da",
"organisation_000000C704SyIncBk9QwYOGwqmLq6",
"organisation_000000C8xugy7HrRpUzgMuUMSCWDw",
"organisation_000000C704VPGmkGk72JESTbAAwhk",
"organisation_000000C704bUgkZTF12ivczDwfQtq",
"organisation_000000C704YOY2aSVySRKzolBR2UL",
"organisation_000000C2rgjlrxNqvPLOlyi3NsVDf",
"organisation_000000C2rgY9LIRYhV9Ko6pJWl1o1",
"organisation_000000C2rgaTRpQokHaY05Cf6BKEP",
"organisation_000000C2rgfLNngykCnHMDbxiyVsv",
"organisation_000000C2rgfEWLY9n1d7s7mez0DIs",
"organisation_000000C2rgjlrxNqvPLOlyi3NsV5P",
"organisation_000000C704c9rTQOy61dqBx2OVENJ",
"organisation_000000C704cbJHzgmogFmZGFMOQki",
"organisation_000000C704cvteQ9eMAiEqk9aJKSj",
"organisation_000000C2rgMkXXmuNxHZoQbB9a9b0",
"organisation_000000C2rgMkXXmuNxHZoQbB9a9do",
"organisation_000000C2rgMkXXmuNxHZoQbB9a9cW",
"organisation_000000C2rgUwL8Jj1HOtjNpY1YKqN",
"organisation_000000C2rgwV19kMh7AzamroeiyYZ",
"organisation_000000C2rgisyKFHHy2AtE5dS66VK",
"organisation_000000C2rgiYNxooQQXiQwbjEBCpk",
"organisation_000000C2rgk6SJoJmwprEGBxbnP0Z",
"organisation_000000C2rgvAfi2VExD9lewBl3NQV",
"organisation_000000C2rgrPMHCYmpdxGSnuXzBa4",
"organisation_000000C2rgms0fMreRvgMbsW96tsZ",
"organisation_000000C2rgoQ51MN0yDp9vSkWj5gs",
"organisation_000000C2rgxH3Kk7NNK3zRevqX4SD",
"organisation_000000C2rgxpMbSE9H8pPunRYOZQa",
"organisation_000000C2rgxpMbSE9H8pPunRYOZWq",
"organisation_000000C2rgxpMbSE9H8pPunRYOZS1",
"organisation_000000C2rgxUmF1lHjeMxdJXKTfal",
"organisation_000000C2rhAYVnojuyyQEixCpF2h5",
"organisation_000000C2rh7touP10f2kaT5x1tqd9",
"organisation_000000C2rgxpMbSE9H8pPunRYOZQf",
"organisation_000000C2rh5uIjqDpQ5zqmCVgOSCq",
"organisation_000000C2rgxpMbSE9H8pPunRYOZTb",
"organisation_000000C2rhECxmVrPvNTFpGBIKvuj",
"organisation_000000C2rgy9wxsh0odHsCHLmJTIU",
"organisation_000000C2rgxpMbSE9H8pPunRYOZXs",
"organisation_000000C2rgsIFuL8QGxB9DQKTlaLb",
"organisation_000000C2rgvc7Wbn3frli2FOiwZsF",
"organisation_000000C2rhECxmVrPvNTFpGBIKvuP",
"organisation_000000C704C9FnzGemXgm6V08wmwL",
"organisation_000000C7048wFdrQyYnFhNVEdk614",
"organisation_000000C2rglXfDf0CHxqXTwtFRIVR",
"organisation_000000C2rhECxmVrPvNTFpGBIKvvy",
"organisation_000000C2rgqxuSdGy6zLK5Uha5zIZ",
"organisation_000000C7049iHorBeowK62ILpYC3T",
"organisation_000000C704BawXH9ssivLdMUR5I2B",
"organisation_000000C704DMjnYJ9lLN78bKIe5Ox",
"organisation_000000C704NY3YduyKPRlmj8W7fAH",
"organisation_000000C704HnDxFBKxtUWthPxY4ld",
"organisation_000000C704KYmInjCSzJfFNyUrZMe",
"organisation_000000C704JtbZwnTO0OkgQA31lry",
"organisation_000000C704KmVD5N6pJcdR2ZyoAXB",
"organisation_000000C704LmGIMlhRn00HUIeYroB",
"organisation_000000C704L75ZVpyMo55iWUCj4KK",
"organisation_000000C704LDx1eevXyEZoLmwhMto",
"organisation_000000C704GSsVXJsnvehlln3sTmq",
"organisation_000000C704Hu5PO0I93e0zWihWNKr",
"organisation_000000C704OsP0LmQUNHauelPnGBz",
"organisation_000000C704Oeg648W82ycj09vqf2Y",
"organisation_000000C704XjNJjWmtTWQQqwjbExp",
"organisation_000000C704QQTMLHn0fQOEEznPSO2",
"organisation_000000C704Oeg648W82ycj09vqf2S",
"organisation_000000C704UPVhSs9UYvrc1sUQFU0",
"organisation_000000C704RX5tlVKoIxFAW1D8SFA",
"organisation_000000C704RyXiKn9WxZBXpEB1eZx",
"organisation_000000C704UPVhSs9UYvrc1sUQFTH",
"organisation_000000C704TItA2ebgvP0fkr4hFZp",
"organisation_000000C704RX5tlVKoIxFAW1D8SEP",
"organisation_000000C704UWN9bh6fj5LhrBEOY1O",
"organisation_000000C704V4gQJnsZXqmAzgwG2wt",
"organisation_000000C704TkKybwQPa0x3442aRx3",
"organisation_000000C704XOmxJ3vLz3y9N2VgLEe",
"organisation_000000C704b3Ew0BQIO6zFg0ymEYF",
"organisation_000000C704a3TqimpfujcPEIJ1XFh",
"organisation_000000C704WP1s1fKjVgbIvJpvdxQ",
"organisation_000000CDj8mlzkgtBMpwUaSJgmt1d",
"organisation_000000C704ZitUIJy8QHA7kO56dWa",
"organisation_000000CQRpnwRjhO8wGFaflkoKKNU",
"organisation_000000CT8T8APzv7tvMURrvpTv7o2",
"organisation_000000C704aieZZiYkteWyC6krKlB",
"organisation_000000C704cp2CHKhB0YkkuqqL1uF",
"organisation_000000C704ZVAa0g3m5yBw5mbA2MN",
"organisation_000000C2rhIy2IdCSfQ37rqBB9pIh",
"organisation_000000C2rglXfDf0CHxqXTwtFRIVK",
"organisation_000000C2rhIy2IdCSfQ37rqBB9p5e",
"organisation_000000C2rgRx3sTXFPylcqUO0IF0m",
"organisation_000000C2rh1ag2IAbOi1v6vilSlNM",
"organisation_000000CUaGZxjDuVEDaCC2DmlyXk8",
"organisation_000000C2rglXfDf0CHxqXTwtFRIbi",
"organisation_000000C2rgcgguHFpsrbhxkhvdJmr",
"organisation_000000C2rhDlVxwZbCirJRwyKRjgL",
"organisation_000000C704TdTWT7TEPrSxElIc9M3",
"organisation_000000C2rh6ZTSh9YV4ulLAK8EFgK",
"organisation_000000C2rgsqZB3FCAlwZgYqBd57o",
"organisation_000000C2rgaMaNHzn6QOVzNMMD1iy",
"organisation_000000C2rgQ4PA3Z1MCANFQFOl93u",
"organisation_000000C2rhLcjC2vMzLim7hQyV1G5",
"organisation_000000C704WIAPsqNYLX7D615xLPj",
"organisation_000000CQeLYUJDI6e4zB1V1B088Nk",
"organisation_000000C2rgnrlkeGF4P3jSKEorasE",
"organisation_000000CBpuxAZ2pXWzYMnSP3CXVC4"
]

const sleep = (n) => new Promise((res) => {
  setTimeout(() => {
    res()
  }, n)
})

const doWork = async () => {
  for (const orgId of orgIds) {
    await pbpClient.put(`categories/category_000000CUpmzeSdAYRMEHaVUlWKPCq/${orgId}`)
    await sleep(500)
  }
}

doWork()
.then(() => {
  console.log('finish')
})
.catch((e) => {
  console.log('error', e)
})