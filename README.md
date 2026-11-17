# Spot the NOVA Group — Food Processing & Ingredient Detective Game

An interactive HTML5, CSS3, and JavaScript browser game where players inspect real food photographs and back-of-pack ingredient declarations to classify products into the 4 official **NOVA Food Classification Groups** ([Open Food Facts NOVA](https://world.openfoodfacts.org/nova) & [FAO Ultra-Processed Foods Framework](https://openknowledge.fao.org/server/api/core/bitstreams/5277b379-0acb-4d97-a6a3-602774104629/content)).

## Repository Structure

```text
├── index.html      # Main game layout & views (Scanner Game, NOVA Guide, Pantry Dex)
├── style.css       # Complete custom styles, animations, and responsive rules
├── script.js       # Game state engine, 24 food specimens, Canvas scanner & Web Audio FX
├── images/         # 10 studio food & product photographs mapped across all 24 specimens
└── README.md       # Deployment instructions for GitHub Pages
```

## How to Upload & Host on GitHub Pages

1. Create a new repository on GitHub (for example, `spot-the-nova-group`).
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `images/` folder to the root of your repository.
3. In your GitHub repository, go to **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` (and `/ (root)`), and click **Save**.
5. Your live game will be published at `https://<your-username>.github.io/spot-the-nova-group/`.

## Controls & Modes

- **Challenge Clue Filters**:
  - **Image + Ingredients**: Inspect both the studio food photograph/scanner and the declared ingredient list.
  - **Image Only**: Spot the NOVA classification strictly from the product photograph and optical scanner.
  - **Ingredients Only (Label Detective)**: The product photograph is sealed until you classify the food strictly from its ingredient list.
- **Keyboard Shortcuts**:
  - `1`, `2`, `3`, `4`: Guess NOVA Group 1, 2, 3, or 4
  - `H`: Highlight culinary (Group 2) vs. industrial ultra-processed (Group 4) ingredient clues
  - `Space` or `Enter`: Advance to the next food specimen
  - `M`: Mute/unmute synthesized Web Audio sound effects
