.PHONY: bench-cold
bench-cold:
	@for i in $$(seq 1 $${N:-1}); do \
		start=$$(date +%s%N); \
		pnpm dev --port 4173 --strictPort &>/dev/null & \
		pid=$$!; \
		until curl -fs -o /dev/null http://localhost:4173; do sleep 0.1; done; \
		end=$$(date +%s%N); \
		echo "Cold start #$$i: $$(( (end - start) / 1000000 )) ms"; \
		kill $$pid 2>/dev/null; \
		wait $$pid 2>/dev/null || true; \
		done
