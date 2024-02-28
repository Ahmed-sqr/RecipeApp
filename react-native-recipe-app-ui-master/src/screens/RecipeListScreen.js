import { SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchFilter from '../components/SearchFilter'
import CategoriesFilter from '../components/CategoriesFilter'
import RecipeCard from '../components/RecipeCard'
import { categories, recipeList } from '../Constant'

const RecipeListScreen = () => {
  return (
   <SafeAreaView style={{ flex: 1,
    marginTop:StatusBar.currentHeight,marginHorizontal:16}}>
        <Header headerText={'Hi, Ahmed'} headerIcon={'bell-o'}/>
        <SearchFilter icon={'search'} placeholder={'Search for recipes...'} />
        <View style={{marginTop:10}}>
          <Text style={{fontSize:22, fontWeight:'bold'}}>Categories</Text>
          <CategoriesFilter/>
        </View>
        <View style={{marginTop:15, flex:1}}>
          <Text style={{fontSize:22, fontWeight:'bold'}}>Recipes</Text>
        </View>
        <RecipeCard/>
    </SafeAreaView>
  )
}

export default RecipeListScreen

const styles = StyleSheet.create({})