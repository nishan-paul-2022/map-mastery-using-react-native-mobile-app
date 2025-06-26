import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker, Polyline, UrlTile, Circle } from 'react-native-maps';

const App = () => {
  const [selectedTileServer, setSelectedTileServer] = useState('detailed');
  const [showTraffic, setShowTraffic] = useState(false);
  const [showTransit, setShowTransit] = useState(false);
  const [showCycling, setShowCycling] = useState(false);

  // Generate two random coordinates around NYC with more variety
  const coord1 = {
    latitude: 40.7128 + (Math.random() - 0.5) * 0.2, // Wider area
    longitude: -74.0060 + (Math.random() - 0.5) * 0.2
  };
  
  const coord2 = {
    latitude: 40.7589 + (Math.random() - 0.5) * 0.2,
    longitude: -73.9851 + (Math.random() - 0.5) * 0.2
  };

  // Calculate distance between points
  const distance = Math.sqrt(
    Math.pow(coord1.latitude - coord2.latitude, 2) + 
    Math.pow(coord1.longitude - coord2.longitude, 2)
  ) * 111; // Approximate km

  // Calculate center point and region for map
  const centerLatitude = (coord1.latitude + coord2.latitude) / 2;
  const centerLongitude = (coord1.longitude + coord2.longitude) / 2;
  
  const latDelta = Math.abs(coord1.latitude - coord2.latitude) * 2.5;
  const lngDelta = Math.abs(coord1.longitude - coord2.longitude) * 2.5;

  const region = {
    latitude: centerLatitude,
    longitude: centerLongitude,
    latitudeDelta: Math.max(latDelta, 0.02),
    longitudeDelta: Math.max(lngDelta, 0.02),
  };

  // Different tile servers for enhanced detail
  const tileServers = {
    detailed: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    terrain: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    humanitarian: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    transport: 'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=YOUR_API_KEY',
  };

  return (
    <View style={styles.container}>
      {/* Map Controls */}
      <View style={styles.controls}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity 
            style={[styles.button, selectedTileServer === 'detailed' && styles.activeButton]}
            onPress={() => setSelectedTileServer('detailed')}
          >
            <Text style={styles.buttonText}>Standard</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, selectedTileServer === 'humanitarian' && styles.activeButton]}
            onPress={() => setSelectedTileServer('humanitarian')}
          >
            <Text style={styles.buttonText}>Detailed</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, selectedTileServer === 'terrain' && styles.activeButton]}
            onPress={() => setSelectedTileServer('terrain')}
          >
            <Text style={styles.buttonText}>Terrain</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, selectedTileServer === 'satellite' && styles.activeButton]}
            onPress={() => setSelectedTileServer('satellite')}
          >
            <Text style={styles.buttonText}>Satellite</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Info Panel */}
      <View style={styles.infoPanel}>
        <Text style={styles.infoText}>
          Distance: {distance.toFixed(2)} km | Coordinates: {coord1.latitude.toFixed(4)}, {coord1.longitude.toFixed(4)} → {coord2.latitude.toFixed(4)}, {coord2.longitude.toFixed(4)}
        </Text>
      </View>

      <MapView
        style={styles.map}
        initialRegion={region}
        mapType="none"
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsScale={true}
        showsBuildings={true}
        showsTraffic={showTraffic}
        showsIndoors={true}
        showsPointsOfInterest={true}
      >
        {/* Primary tile layer */}
        <UrlTile
          urlTemplate={tileServers[selectedTileServer as keyof typeof tileServers]}
          maximumZ={19}
          flipY={false}
          zIndex={1}
        />

        {/* Overlay: Cycling paths */}
        {showCycling && (
          <UrlTile
            urlTemplate="https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=YOUR_API_KEY"
            maximumZ={18}
            flipY={false}
            zIndex={2}
            opacity={0.6}
          />
        )}

        {/* Overlay: Public transport */}
        {showTransit && (
          <UrlTile
            urlTemplate="https://tile.memomaps.de/tilegen/{z}/{x}/{y}.png"
            maximumZ={18}
            flipY={false}
            zIndex={3}
            opacity={0.7}
          />
        )}
        
        {/* Enhanced markers with more info */}
        <Marker
          coordinate={coord1}
          title="Starting Point"
          description={`Lat: ${coord1.latitude.toFixed(6)}, Lng: ${coord1.longitude.toFixed(6)}\nElevation: ~${Math.floor(Math.random() * 100)}m`}
          pinColor="red"
        />
        
        <Marker
          coordinate={coord2}
          title="Destination Point"
          description={`Lat: ${coord2.latitude.toFixed(6)}, Lng: ${coord2.longitude.toFixed(6)}\nElevation: ~${Math.floor(Math.random() * 100)}m`}
          pinColor="blue"
        />

        {/* Midpoint marker */}
        <Marker
          coordinate={{
            latitude: centerLatitude,
            longitude: centerLongitude
          }}
          title="Midpoint"
          description={`Center: ${centerLatitude.toFixed(6)}, ${centerLongitude.toFixed(6)}`}
          pinColor="green"
        />
        
        {/* Main connecting line */}
        <Polyline
          coordinates={[coord1, coord2]}
          strokeColor="red"
          strokeWidth={4}
          zIndex={4}
        />

        {/* Buffer zones around points */}
        <Circle
          center={coord1}
          radius={500} // 500 meters
          strokeColor="rgba(255,0,0,0.5)"
          fillColor="rgba(255,0,0,0.1)"
          strokeWidth={2}
        />

        <Circle
          center={coord2}
          radius={500}
          strokeColor="rgba(0,0,255,0.5)"
          fillColor="rgba(0,0,255,0.1)"
          strokeWidth={2}
        />

        {/* Additional reference points along the route */}
        {Array.from({ length: 3 }, (_, i) => {
          const ratio = (i + 1) / 4;
          const lat = coord1.latitude + (coord2.latitude - coord1.latitude) * ratio;
          const lng = coord1.longitude + (coord2.longitude - coord1.longitude) * ratio;
          return (
            <Marker
              key={i}
              coordinate={{ latitude: lat, longitude: lng }}
              title={`Waypoint ${i + 1}`}
              description={`${(ratio * 100).toFixed(0)}% along route`}
              pinColor="orange"
            />
          );
        })}
      </MapView>

      {/* Layer Controls */}
      <View style={styles.layerControls}>
        <TouchableOpacity 
          style={[styles.layerButton, showCycling && styles.activeLayer]}
          onPress={() => setShowCycling(!showCycling)}
        >
          <Text style={styles.layerText}>🚴 Cycling</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.layerButton, showTransit && styles.activeLayer]}
          onPress={() => setShowTransit(!showTransit)}
        >
          <Text style={styles.layerText}>🚇 Transit</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.layerButton, showTraffic && styles.activeLayer]}
          onPress={() => setShowTraffic(!showTraffic)}
        >
          <Text style={styles.layerText}>🚗 Traffic</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    top: 50,
    left: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
  },
  activeButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoPanel: {
    position: 'absolute',
    bottom: 100,
    left: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 10,
    borderRadius: 8,
  },
  infoText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  layerControls: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    zIndex: 10,
  },
  layerButton: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  activeLayer: {
    backgroundColor: '#34C759',
  },
  layerText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default App;
