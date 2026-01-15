<template>
  <div class="cardapio-page">
    <!-- Hero Header -->
    <section class="cardapio-hero">
      <div class="hero-bg">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
      </div>
      
      <div class="container">
        <NuxtLink to="/portifolio/pizzaria" class="back-link">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          Voltar
        </NuxtLink>
        
        <div class="hero-content">
          <h1>Monte Sua <span class="highlight">Pizza</span></h1>
          <p>Escolha o tamanho, quantos sabores e personalize do seu jeito</p>
        </div>
      </div>
    </section>

    <!-- Pizza Builder -->
    <section class="builder-section">
      <div class="container">
        <div class="builder-grid">
          <!-- Pizza Preview -->
          <div class="preview-column">
            <div class="preview-card">
              <div class="preview-header">
                <h3>Sua Pizza</h3>
                <div class="preview-size">{{ selectedSize.name }}</div>
              </div>
              
              <div class="preview-details">
                <div class="detail-row">
                  <span>Tamanho:</span>
                  <strong>{{ selectedSize.name }} ({{ selectedSize.slices }} pedaços)</strong>
                </div>
                <div class="detail-row">
                  <span>Sabores:</span>
                  <strong>{{ selectedFlavors.length || 'Nenhum' }}</strong>
                </div>
                <div class="detail-row total-row">
                  <span>Total:</span>
                  <strong class="price">R$ {{ totalPrice }}</strong>
                </div>
              </div>
              
              <button class="add-to-cart-btn" :disabled="selectedFlavors.length === 0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 5V15M5 10H15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Adicionar ao Pedido
              </button>
            </div>
          </div>

          <!-- Builder Steps -->
          <div class="builder-column">
            <!-- Step 1: Size -->
            <div class="builder-step">
              <div class="step-header">
                <div class="step-number">1</div>
                <h3>Escolha o Tamanho</h3>
              </div>
              
              <div class="size-options">
                <div 
                  v-for="size in sizes" 
                  :key="size.id"
                  :class="['size-option', { active: selectedSize.id === size.id }]"
                  @click="selectSize(size)"
                >
                  <div class="size-info">
                    <div class="size-name">{{ size.name }}</div>
                    <div class="size-slices">{{ size.slices }} pedaços</div>
                  </div>
                  <div class="size-price">+ R$ {{ size.price }}</div>
                </div>
              </div>
            </div>

            <!-- Step 2: Flavors -->
            <div class="builder-step">
              <div class="step-header">
                <div class="step-number">2</div>
                <h3>Quantos Sabores?</h3>
              </div>
              
              <div class="flavor-count-options">
                <button 
                  v-for="count in [1, 2, 3, 4]" 
                  :key="count"
                  :class="['flavor-count-btn', { 
                    active: maxFlavors === count,
                    disabled: (selectedSize.id === 1 && count > 2)
                  }]"
                  :disabled="selectedSize.id === 1 && count > 2"
                  @click="setMaxFlavors(count)"
                >
                  {{ count }} {{ count === 1 ? 'Sabor' : 'Sabores' }}
                  <span v-if="selectedSize.id === 1 && count > 2" class="disabled-hint">(Só em Média/Grande)</span>
                </button>
              </div>
            </div>

            <!-- Step 3: Choose Flavors -->
            <div class="builder-step">
              <div class="step-header">
                <div class="step-number">3</div>
                <h3>Escolha os Sabores</h3>
                <div class="selected-count">{{ selectedFlavors.length }}/{{ maxFlavors }}</div>
              </div>
              
              <div class="flavors-grid">
                <div 
                  v-for="flavor in availableFlavors" 
                  :key="flavor.id"
                  :class="['flavor-card', { 
                    selected: isFlavorSelected(flavor.id),
                    disabled: !canSelectMore && !isFlavorSelected(flavor.id)
                  }]"
                  @click="toggleFlavor(flavor)"
                >
                  <div class="flavor-header">
                    <div class="flavor-name">{{ flavor.name }}</div>
                    <div class="flavor-check">
                      <svg v-if="isFlavorSelected(flavor.id)" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13 4L6 11L3 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <div class="flavor-ingredients">{{ flavor.ingredients }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating Cart -->
    <button class="floating-cart">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 2L7.17 6H2.18C1.43 6 0.89 6.76 1.13 7.47L3.5 14.47C3.66 14.94 4.11 15.26 4.61 15.26H18.39C18.89 15.26 19.34 14.94 19.5 14.47L21.87 7.47C22.11 6.76 21.57 6 20.82 6H15.83L14 2H9ZM9 18C7.9 18 7 18.9 7 20C7 21.1 7.9 22 9 22C10.1 22 11 21.1 11 20C11 18.9 10.1 18 9 18ZM18 18C16.9 18 16 18.9 16 20C16 21.1 16.9 22 18 22C19.1 22 20 21.1 20 20C20 18.9 19.1 18 18 18Z" fill="currentColor"/>
      </svg>
      <span class="cart-count">0</span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

definePageMeta({
  layout: 'blank'
});

const sizes = [
  { id: 1, name: 'Pequena', slices: 4, price: '35,00' },
  { id: 2, name: 'Média', slices: 6, price: '45,00' },
  { id: 3, name: 'Grande', slices: 8, price: '55,00' }
];

const selectedSize = ref(sizes[1]);
const maxFlavors = ref(1);
const selectedFlavors = ref([]);

const availableFlavors = [
  { id: 1, name: 'Margherita', ingredients: 'Mussarela, tomate, manjericão', color: '#ef4444' },
  { id: 2, name: 'Calabresa', ingredients: 'Calabresa, cebola, azeitona', color: '#f97316' },
  { id: 3, name: 'Portuguesa', ingredients: 'Presunto, ovo, cebola', color: '#eab308' },
  { id: 4, name: 'Quatro Queijos', ingredients: 'Mussarela, gorgonzola, parmesão, catupiry', color: '#84cc16' },
  { id: 5, name: 'Frango Catupiry', ingredients: 'Frango, catupiry, milho', color: '#22c55e' },
  { id: 6, name: 'Pepperoni', ingredients: 'Pepperoni, mussarela', color: '#10b981' },
  { id: 7, name: 'Vegetariana', ingredients: 'Tomate, pimentão, cebola, champignon', color: '#14b8a6' },
  { id: 8, name: 'Bacon', ingredients: 'Bacon, mussarela, cebola', color: '#06b6d4' },
  { id: 9, name: 'Atum', ingredients: 'Atum, cebola, azeitona', color: '#0ea5e9' },
  { id: 10, name: 'Napolitana', ingredients: 'Mussarela, tomate, parmesão', color: '#3b82f6' },
  { id: 11, name: 'Strogonoff', ingredients: 'Strogonoff de carne, batata palha', color: '#6366f1' },
  { id: 12, name: 'Chocolate', ingredients: 'Chocolate ao leite, granulado', color: '#8b5cf6' }
];

const sliceAngle = computed(() => 360 / selectedSize.value.slices);

const slices = computed(() => {
  const numSlices = selectedSize.value.slices;
  const result = [];
  
  if (selectedFlavors.value.length === 0) {
    for (let i = 0; i < numSlices; i++) {
      result.push({ name: '', color: '#e5e7eb' });
    }
  } else {
    const slicesPerFlavor = Math.floor(numSlices / selectedFlavors.value.length);
    let currentSlice = 0;
    
    selectedFlavors.value.forEach((flavor, index) => {
      const isLast = index === selectedFlavors.value.length - 1;
      const count = isLast ? numSlices - currentSlice : slicesPerFlavor;
      
      for (let i = 0; i < count; i++) {
        result.push({ 
          name: flavor.name.substring(0, 3), 
          color: flavor.color 
        });
        currentSlice++;
      }
    });
  }
  
  return result;
});

const canSelectMore = computed(() => selectedFlavors.value.length < maxFlavors.value);

const totalPrice = computed(() => {
  const basePrice = parseFloat(selectedSize.value.price.replace(',', '.'));
  const flavorPrice = selectedFlavors.value.length > 1 ? 5 * (selectedFlavors.value.length - 1) : 0;
  return (basePrice + flavorPrice).toFixed(2).replace('.', ',');
});

function selectSize(size) {
  selectedSize.value = size;
  
  // Ajustar max sabores baseado no tamanho
  const maxForSize = size.id === 1 ? 2 : 4; // Pequena: max 2, Média/Grande: max 4
  if (maxFlavors.value > maxForSize) {
    maxFlavors.value = maxForSize;
  }
  
  // Remover sabores extras se necessário
  if (selectedFlavors.value.length > maxFlavors.value) {
    selectedFlavors.value = selectedFlavors.value.slice(0, maxFlavors.value);
  }
}

function setMaxFlavors(count) {
  const maxForSize = selectedSize.value.id === 1 ? 2 : 4;
  if (count > maxForSize) return; // Não permite selecionar mais que o permitido
  
  maxFlavors.value = count;
  if (selectedFlavors.value.length > count) {
    selectedFlavors.value = selectedFlavors.value.slice(0, count);
  }
}

function isFlavorSelected(flavorId) {
  return selectedFlavors.value.some(f => f.id === flavorId);
}

function toggleFlavor(flavor) {
  const index = selectedFlavors.value.findIndex(f => f.id === flavor.id);
  
  if (index > -1) {
    selectedFlavors.value.splice(index, 1);
  } else if (canSelectMore.value) {
    selectedFlavors.value.push(flavor);
  }
}

useHead({
  title: 'Monte Sua Pizza - Cardápio Personalizado',
  meta: [
    { name: 'description', content: 'Monte sua pizza do seu jeito. Escolha tamanho, sabores e crie a combinação perfeita.' }
  ]
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }

.cardapio-page { font-family: 'Inter', -apple-system, sans-serif; color: #0f172a; background: #f8fafc; min-height: 100vh; padding-bottom: 2rem; }
.container { max-width: 1400px; margin: 0 auto; padding: 0 2rem; }

/* Hero */
.cardapio-hero { position: relative; padding: 3rem 0 4rem; background: linear-gradient(135deg, #dc2626, #b91c1c); overflow: hidden; }
.hero-bg { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
.blob { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.3; animation: float 15s ease-in-out infinite; }
.blob-1 { width: 300px; height: 300px; background: #fbbf24; top: -100px; right: -50px; }
.blob-2 { width: 250px; height: 250px; background: #f59e0b; bottom: -80px; left: -50px; animation-delay: -7s; }
@keyframes float { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(30px, -30px); } }

.back-link { position: relative; z-index: 10; display: inline-flex; align-items: center; gap: 0.5rem; color: rgba(255, 255, 255, 0.9); text-decoration: none; font-weight: 600; margin-bottom: 2rem; padding: 0.5rem 1rem; border-radius: 8px; transition: all 0.3s ease; }
.back-link:hover { background: rgba(255, 255, 255, 0.1); gap: 0.75rem; }

.hero-content { position: relative; z-index: 10; text-align: center; }
.cardapio-hero h1 { font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; color: white; margin-bottom: 1rem; letter-spacing: -0.02em; }
.highlight { color: #fbbf24; }
.cardapio-hero p { font-size: 1.125rem; color: rgba(255, 255, 255, 0.9); }

/* Builder */
.builder-section { padding: 4rem 0; }
.builder-grid { display: grid; grid-template-columns: 400px 1fr; gap: 3rem; align-items: start; }
.preview-column { position: sticky; top: 2rem; }
.preview-card { background: white; border-radius: 24px; padding: 2rem; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); }
.preview-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
.preview-header h3 { font-size: 1.5rem; font-weight: 700; color: #0f172a; }
.preview-size { padding: 0.5rem 1rem; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; border-radius: 100px; font-weight: 600; font-size: 0.875rem; }

.pizza-visual { margin-bottom: 2rem; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; min-height: 360px; justify-content: center; }

.empty-pizza {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 2rem;
  text-align: center;
}

.empty-icon {
  font-size: 4rem;
  opacity: 0.3;
  filter: grayscale(100%);
}

.empty-pizza p {
  color: #94a3b8;
  font-size: 0.95rem;
  line-height: 1.5;
}

.pizza-base { position: relative; width: 280px; height: 280px; border-radius: 50%; background: #fef3c7; overflow: hidden; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); }
.pizza-slice { position: absolute; width: 50%; height: 50%; top: 50%; left: 50%; transform-origin: 0% 0%; clip-path: polygon(0 0, 100% 0, 0 100%); transition: all 0.3s ease; }

.pizza-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, #fbbf24, #f59e0b);
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

/* Flavors Legend */
.flavors-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  max-width: 280px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: #f8fafc;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #0f172a;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.1);
}

.slice-label { position: absolute; top: 30%; left: 20%; font-size: 0.75rem; font-weight: 700; color: white; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); transform: rotate(-45deg); }

.preview-details { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; padding: 1.5rem; background: #f8fafc; border-radius: 12px; }
.detail-row { display: flex; justify-content: space-between; align-items: center; color: #64748b; font-size: 0.95rem; }
.detail-row strong { color: #0f172a; }
.total-row { padding-top: 0.75rem; border-top: 2px solid #e2e8f0; font-size: 1.125rem; }
.price { color: #dc2626; font-size: 1.5rem; }

.add-to-cart-btn { width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1.125rem 1.5rem; background: linear-gradient(135deg, #dc2626, #b91c1c); border: none; border-radius: 14px; color: white; font-weight: 600; font-size: 1rem; font-family: inherit; cursor: pointer; transition: all 0.3s ease; }
.add-to-cart-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(220, 38, 38, 0.4); }
.add-to-cart-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.builder-step { background: white; border-radius: 20px; padding: 2rem; margin-bottom: 2rem; border: 1px solid #e2e8f0; }
.step-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
.step-number { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; border-radius: 50%; font-weight: 700; }
.step-header h3 { flex: 1; font-size: 1.25rem; font-weight: 700; color: #0f172a; }
.selected-count { padding: 0.375rem 0.875rem; background: #fef3c7; color: #92400e; border-radius: 100px; font-size: 0.875rem; font-weight: 700; }

.size-options { display: flex; flex-direction: column; gap: 1rem; }
.size-option { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem 1.5rem; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; }
.size-option:hover { border-color: #dc2626; background: #fef2f2; }
.size-option.active { border-color: #dc2626; background: linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(185, 28, 28, 0.1)); }
.size-name { font-weight: 700; color: #0f172a; font-size: 1.125rem; }
.size-slices { color: #64748b; font-size: 0.875rem; }
.size-price { font-weight: 700; color: #dc2626; font-size: 1.25rem; }

.flavor-count-options { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
.flavor-count-btn { padding: 1rem; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; font-weight: 600; font-family: inherit; cursor: pointer; transition: all 0.3s ease; color: #64748b; }
.flavor-count-btn:hover:not(:disabled) { border-color: #dc2626; color: #dc2626; }
.flavor-count-btn.active { background: linear-gradient(135deg, #dc2626, #b91c1c); border-color: transparent; color: white; }
.flavor-count-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.flavor-count-btn.disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.disabled-hint {
  display: block;
  font-size: 0.7rem;
  margin-top: 0.25rem;
  font-weight: 400;
}

.flavors-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem; }
.flavor-card { padding: 1.25rem; background: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; cursor: pointer; transition: all 0.3s ease; }
.flavor-card:hover:not(.disabled) { border-color: #dc2626; transform: translateY(-2px); }
.flavor-card.selected { background: linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(185, 28, 28, 0.1)); border-color: #dc2626; }
.flavor-card.disabled { opacity: 0.4; cursor: not-allowed; }
.flavor-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
.flavor-name { font-weight: 700; color: #0f172a; }
.flavor-check { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; background: #dc2626; border-radius: 50%; color: white; }
.flavor-ingredients { color: #64748b; font-size: 0.875rem; line-height: 1.4; }

.floating-cart { position: fixed; bottom: 2rem; right: 2rem; width: 64px; height: 64px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #dc2626, #b91c1c); border: none; border-radius: 50%; color: white; cursor: pointer; box-shadow: 0 10px 30px rgba(220, 38, 38, 0.4); transition: all 0.3s ease; z-index: 100; }
.floating-cart:hover { transform: translateY(-4px) scale(1.05); box-shadow: 0 15px 40px rgba(220, 38, 38, 0.5); }
.cart-count { position: absolute; top: -4px; right: -4px; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; background: #fbbf24; color: #0f172a; border-radius: 50%; font-size: 0.75rem; font-weight: 700; border: 3px solid white; }

@media (max-width: 1024px) {
  .builder-grid { grid-template-columns: 1fr; }
  .preview-column { position: relative; top: auto; }
}

@media (max-width: 768px) {
  .container { padding: 0 1.5rem; }
  .flavor-count-options { grid-template-columns: repeat(2, 1fr); }
  .flavors-grid { grid-template-columns: 1fr; }
}
</style>
