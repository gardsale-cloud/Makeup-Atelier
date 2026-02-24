# 🔒 GLOBAL CONSTRAINTS — Mobile Refinement Mode

**Status**: Persistent Project Rules (Current Phase: Mobile Refinement)

## 1. Structure Lock
**DOM is locked.** 
- **Do NOT**: Change HTML structure, tag hierarchy, move sections, add/remove wrappers, duplicate blocks, or modify semantic elements.
- **Do NOT**: Paste any new layout trees.

## 2. Desktop Protection
**Desktop layout is final.**
- **Do NOT**: Modify desktop spacing, flex/grid behavior, typography scale, image ratios, or design tokens.
- All changes must affect **mobile only**.
- **Requirement**: Desktop visual output must remain 100% identical. 
- Use base classes (for mobile-first architecture) or `md:` overrides to restore desktop.

## 3. Allowed Actions (Mobile Only)
You **MAY**:
- Adjust flex direction and grid columns.
- Use `order-*` for re-sequencing.
- Modify spacing and gaps using the **existing spacing scale only**.
- Refine image aspect ratios and vertical rhythm.
- **Strictly No**: New tokens or new UI patterns.

## 4. Structural Change Protocol
Before modifying any markup:
1. Explain the specific problem.
2. Justify why a CSS-only (Tailwind) solution is impossible.
3. **Wait for explicit approval.** Never silently refactor.

## 5. Priority Hierarchy
When resolving mobile issues, prioritize in this order:
1. **Emotional safety** (calm, intentional rhythm)
2. **Density control** (avoiding clutter)
3. **Typography clarity**
4. **Touch usability**
5. **Visual symmetry**

*Priority Note: Never prioritize "visual drama" over the above.*

---

## 💡 Engineering Best Practices

### Prevent Hidden Complexity
- **Do NOT**: Add deeply nested responsive utilities or stack conflicting responsive rules.
- **Do NOT**: Create class redundancy. Keep logic clean and predictable.

### No Hardcoded Mobile Blocks
- One unified layout only.
- **Do NOT**: Create `hidden md:block` duplicates or mobile-only duplicated components.
