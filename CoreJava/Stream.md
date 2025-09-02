#Filtering
satellites.values().stream()
    .filter(sat -> sat.getAltitude() > 500)   // only high satellites
    .forEach(sat -> System.out.println(sat.getId()));
satellites.values().stream()
#Sorting
    .sorted((s1, s2) -> Double.compare(s1.getAltitude(), s2.getAltitude()))
    .forEach(sat -> System.out.println(sat.getId() + " -> " + sat.getAltitude()));
#Mapping
List<String> ids = satellites.values().stream()
    .map(Satellite::getId)  // extract only IDs
    .toList();

System.out.println(ids);
#Combining
long visibleCount = satellites.values().stream()
    .filter(sat -> sat.isVisible(groundStation))
    .count();
#ParallelStreams
System.out.println("Visible satellites: " + visibleCount);
satellites.values().parallelStream()
    .forEach(sat -> System.out.println("Processing " + sat.getId() + " on " + Thread.currentThread().getName()));
