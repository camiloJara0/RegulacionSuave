<template>
    <section id="horarios" class="container-section">
      <div class="max-w-2xl mx-auto space-y-10">
        <div class="text-center space-y-4">
          <h2 class="heading-section text-foreground">Horarios y cupos</h2>
          <p class="text-body text-muted-foreground">
            Las sesiones se realizan con agenda previa y cupos limitados.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="card-soft space-y-4">
            <h4 class="heading-subsection text-foreground text-center">
              Días de atención
            </h4>
            <div class="flex flex-wrap justify-center gap-3">
                <span v-for="(dia) in ['Lunes', 'Martes', 'Miercoles']"
                  :key="dia"
                  class="px-4 py-2 bg-sage-soft rounded-full text-sage-dark text-small"
                >
                  {{dia}}
                </span>
            </div>
          </div>

          <div class="card-soft space-y-4">
            <h4 class="heading-subsection text-foreground text-center">
              Horarios disponibles
            </h4>
            <div class="space-y-3 text-center">
              <p class="text-body text-foreground/80">10:00 a.m. – 1:00 p.m.</p>
              <div class="divider-soft my-4" />
              <p class="text-small text-muted-foreground">
                Solo un día a la semana:
              </p>
              <p class="text-body text-foreground/80">4:00 – 5:00 p.m.</p>
            </div>
          </div>
        </div>

        <div class="text-center space-y-4 pt-4">
          <p class="text-body text-muted-foreground italic">
            Cada día se atiende un número reducido de personas para cuidar
            la calidad del acompañamiento y el ritmo del proceso.
          </p>
          <p class="text-small text-sage-dark font-medium">
            Los cupos semanales son limitados.
          </p>
        </div>
      </div>
    </section>
</template>