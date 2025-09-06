<x-layouts.app :title="__('Dashboard')">
  <div id="app">
        @auth
            <script>
                window.user = @json(auth()->user());
            </script>
        @endauth
    </div>
</x-layouts.app>
