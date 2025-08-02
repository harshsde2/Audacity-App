import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

// Styles for HomeScreen
// Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1D1D1F",
  },
  headerSubtitle: {
    fontSize: 18,
    color: "#86868B",
    marginTop: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardContent: {
    padding: 20,
    minHeight: 120,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  appIcon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 15,
  },
  appInfo: {
    flex: 1,
  },
  appName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  appCategory: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 4,
  },
  appRating: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  priceContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  price: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  cardBody: {
    marginTop: 15,
  },
  description: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 14,
    lineHeight: 20,
  },
  // DetailScreen styles
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  sharedElement: {
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  heroSection: {
    height: 250,
    padding: 20,
    justifyContent: "space-between",
  },
  closeButton: {
    alignSelf: "flex-end",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  heroContent: {
    alignItems: "center",
  },
  heroIcon: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginBottom: 15,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    marginBottom: 15,
  },
  heroStats: {
    flexDirection: "row",
    alignItems: "center",
  },
  heroRating: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    marginRight: 20,
  },
  heroPrice: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  contentWrapper: {
    flex: 1,
  },
  contentSection: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1D1D1F",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: "#86868B",
    lineHeight: 24,
  },
  screenshot: {
    width: 120,
    height: 240,
    borderRadius: 12,
    marginRight: 15,
  },
  reviewItem: {
    marginBottom: 15,
  },
  reviewRating: {
    fontSize: 16,
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 16,
    color: "#1D1D1F",
    marginBottom: 5,
  },
  reviewAuthor: {
    fontSize: 14,
    color: "#86868B",
  },
  actionSection: {
    padding: 20,
    backgroundColor: "#F5F5F7",
  },
  downloadButton: {
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  downloadButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
