<?php

namespace App\Controller\Admin;

use App\Entity\Pages;
use App\Entity\Users;
use App\Form\UsersType;
use App\Form\EditProfilType;
use App\Form\EditUserAdminType;
use App\Repository\PagesRepository;
use App\Repository\UsersRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * Require ROLE_ADMIN for all the actions of this controller
 *
 * @IsGranted("ROLE_ADMIN")
 */

#[Route('admin/users')]
class UsersController extends AbstractController
{
    // ~Admin only => Create a new user~
    #[Route('/new', name: 'app_admin_user_new', methods: ['GET', 'POST'])]
    public function newUser(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        $user = new Users();
        $form = $this->createForm(UsersType::class, $user);

        unset($form['page']);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // ~Hash password~
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('password')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('app_admin_users');
        }
        return $this->render('admin/users/new.html.twig', [
            'form' => $form->createView(),
            'user' => $user
        ]);
        //~adminController => connexion admin=> create new user (vistor or kollector) = OK~
    }


    // ~Admin only => See all users~
    #[Route('/', name: 'app_admin_users')]
    public function users(UsersRepository $usersRepository, PagesRepository $pagesRepository): Response
    {
        return $this->render('admin/users/users_list.html.twig', [
            'users' => $usersRepository->findAll(),
            'pages' => $pagesRepository->findAll()
        ]);
        //~adminController => connexion admin=>  list all users (vistor + kollector) = OK~
    }

    // ~Admin only => See kollectors only~
    #[Route('/kollectors', name: 'app_admin_kollectors')]
    public function usersKollectors(UsersRepository $usersRepository, PagesRepository $pagesRepository): Response
    {
        $kollectors = $usersRepository->findByRole("ROLE_KOLLECTOR");
        // dd($kollectors);

        return $this->render('admin/users/kollectors_list.html.twig', [
            'kollectors' => $kollectors,
            'users' => $usersRepository->findAll(),
            'pages' => $pagesRepository->findAll()
        ]);
         //~adminController => connexion admin=>  list all kollectors only = OK~
    }


    // ~Admin only => Show one user~
    #[Route('/{id}', name: 'app_users_show', methods: ['GET'])]
    public function show(Users $user): Response
    {
        return $this->render('admin/users/show.html.twig', [
            'user' => $user,
        ]);
        //~adminController => connexion admin=> infos one kollector = OK~
    }

    // ~Admin only => Edit a user~
    #[Route('/edit/{id}', name: 'app_admin_user_edit')]
    public function editUser(Request $request, UsersRepository $usersRepository, Users $user)
    {
        $form = $this->createForm(EditUserAdminType::class, $user);
        $form->handleRequest($request);
        // dd($user);
        if ($form->isSubmitted() && $form->isValid()) {
            $usersRepository->add($user, true);

            return $this->redirectToRoute('app_admin_users');
        }
        return $this->render('admin/users/edit.html.twig', [
            'form' => $form->createView(),
            'user' => $user,
        ]);
        //~adminController => connexion admin=> edit one kollector = OK~
    }

    // ~Admin only => Delete a user~
    #[Route('/delete/{id}', name: 'app_admin_user_delete')]
    public function deleteUser(UsersRepository $usersRepository, Users $user, Request $request)
    {
        // if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {
        $usersRepository->remove($user, true);
        // }

        $this->addFlash('delete_user', 'User supprimé.');

        return $this->redirectToRoute('app_admin_users');
    }
     //~adminController => connexion admin=> delete one kollector = OK~
}
